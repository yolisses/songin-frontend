import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { SignInPage } from './signIn/SignInPage';
import { SplashScreen } from './splash/SplashScreen';
import { useUser } from './user/UserContext';

export function AppRoutes() {
  const { user } = useUser();

  if (!user) return <SplashScreen />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
