import { useEffect } from 'react';
import { Routes } from './Routes';
import { UserContextProvider } from './user/UserContext';
import { MusicsContextProvider } from './music/MusicsContext';
import { PlayerContextProvider } from './player/PlayerContext';
import { configureTimeAgo } from './common/configureTimeAgo';

export function App() {
  useEffect(configureTimeAgo, []);

  return (
    <UserContextProvider>
      <MusicsContextProvider>
        <PlayerContextProvider>
          <Routes />
        </PlayerContextProvider>
      </MusicsContextProvider>
    </UserContextProvider>
  );
}
