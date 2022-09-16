import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import { MePage } from './me/MePage';
import { DevPage } from './dev/DevPage';
import { HomePage } from './home/HomePage';
import { useUser } from './user/UserContext';
import { LateralNav } from './nav/LateralNav';
import { ProfilePage } from './me/ProfilePage';
import { PlayerBar } from './player/PlayerBar';
import { ConfigPage } from './config/ConfigPage';
import { PlayerPage } from './player/PlayerPage';
import { SearchPage } from './search/SearchPage';
import { HistoryPage } from './history/HistoryPage';
import { FavoritesPage } from './like/FavoritesPage';
import { SplashScreen } from './splash/SplashScreen';
import { CommentsPage } from './comments/CommentsPage';
import { Nav } from './nav/Nav';

export function Routes() {
  const { loading } = useUser();
  if (loading) return <SplashScreen />;

  return (
    <BrowserRouter>
      <div className="flex flex-row overflow-x-hidden">
        <LateralNav />
        <Nav />
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
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/@:username" element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Router>
      </div>
      <PlayerBar />
    </BrowserRouter>
  );
}
