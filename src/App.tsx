import { Helmet } from 'react-helmet';
import { Routes } from './Routes';
import { isDev } from './common/isDev';
import { UserContextProvider } from './user/UserContext';
import { HomeContextProvider } from './home/HomeContext';
import { ModalContextProvider } from './modal/ModalContext';
import { MusicsContextProvider } from './music/MusicsContext';
import { PlayerContextProvider } from './player/PlayerContext';

export function App() {
  return (
    <>
      {isDev && (
      <Helmet>
        <title>DEV Sonhin</title>
      </Helmet>
      )}
      <UserContextProvider>
        <MusicsContextProvider>
          <PlayerContextProvider>
            <ModalContextProvider>
              <HomeContextProvider>
                <Routes />
              </HomeContextProvider>
            </ModalContextProvider>
          </PlayerContextProvider>
        </MusicsContextProvider>
      </UserContextProvider>
    </>
  );
}
