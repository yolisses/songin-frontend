import { useEffect } from 'react';
import { Routes } from './Routes';
import { UserContextProvider } from './user/UserContext';
import { configureTimeAgo } from './common/configureTimeAgo';
import { MusicsContextProvider } from './music/MusicsContext';
import { PlayerContextProvider } from './player/PlayerContext';
import { SearchContextProvider } from './search/SearchContext';
import { ModalContextProvider } from './modal/ModalContext';

export function App() {
  useEffect(configureTimeAgo, []);

  return (
    <UserContextProvider>
      <SearchContextProvider>
        <MusicsContextProvider>
          <PlayerContextProvider>
            <ModalContextProvider>
              <Routes />
            </ModalContextProvider>
          </PlayerContextProvider>
        </MusicsContextProvider>
      </SearchContextProvider>
    </UserContextProvider>
  );
}
