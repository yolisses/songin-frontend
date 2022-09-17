import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import { Nav } from './nav/Nav';
import { MePage } from './me/MePage';
import { DevPage } from './dev/DevPage';
import { HomePage } from './home/HomePage';
import { useUser } from './user/UserContext';
import { LateralNav } from './nav/LateralNav';
import { ProfilePage } from './me/ProfilePage';
import { PlayerBar } from './player/md/PlayerBar';
import { ConfigPage } from './config/ConfigPage';
import { PlayerPage } from './player/sm/PlayerPage';
import { SearchPage } from './search/SearchPage';
import { HistoryPage } from './history/HistoryPage';
import { FavoritesPage } from './like/FavoritesPage';
import { SplashScreen } from './splash/SplashScreen';

export function Routes() {
  const { loading } = useUser();
  if (loading) return <SplashScreen />;

  return (
    <BrowserRouter>
      <LateralNav />
      <Router>
        <Route path="/" element={<HomePage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/dev" element={<DevPage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/@:nick" element={<ProfilePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Router>
      <Nav />
      <PlayerBar />
    </BrowserRouter>
  );
}
