import { Helmet } from 'react-helmet';
import { Routes } from './Routes';
import { isDev } from './common/isDev';
import { UserContextProvider } from './user/UserContext';
import { ModalContextProvider } from './modal/ModalContext';
import { MusicsContextProvider } from './music/MusicsContext';
import { PlayerContextProvider } from './player/PlayerContext';
import { SearchContextProvider } from './search/SearchContext';

export function App() {
  return (
    <>
      {isDev && (
      <Helmet>
        <title>DEV Sonhin</title>
      </Helmet>
      )}
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
    </>
  );
}
