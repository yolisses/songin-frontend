import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import { api } from './api/api';
import { CommentsPage } from './comments/CommentsPage';
import { ConfigPage } from './config/ConfigPage';
import { DevPage } from './dev/DevPage';
import { History } from './history/History';
import { HomePage } from './home/HomePage';
import { MePage } from './me/MePage';
import { LateralNav } from './nav/LateralNav';
import { PlayerPage } from './player/PlayerPage';
import { SignInPage } from './signIn/SignInPage';
import { SplashScreen } from './splash/SplashScreen';
import { useUser } from './user/UserContext';

export function Routes() {
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
      <div className="flex flex-row overflow-x-hidden">
        <LateralNav />
        <Router>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<MePage />} />
          <Route path="/dev" element={<DevPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/config" element={<ConfigPage />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/comments" element={<CommentsPage />} />
        </Router>
      </div>
    </BrowserRouter>
  );
}
