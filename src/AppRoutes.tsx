import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './api/api';
import { HomePage } from './home/HomePage';
import { SignInPage } from './signIn/SignInPage';
import { SplashScreen } from './splash/SplashScreen';
import { useUser } from './user/UserContext';

export function AppRoutes() {
  const { user, setUser } = useUser();

  const [loading, setLoading] = useState(true);

  async function getMe() {
    try {
      const res = await api.get('users/me');
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 403) {
          setUser(null as any);
          setLoading(false);
        }
      }
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  if (loading) return <SplashScreen />;

  if (!user) return <SignInPage />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
