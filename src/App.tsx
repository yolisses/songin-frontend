import { Routes } from './Routes';
import { UserContextProvider } from './user/UserContext';
import { HomeContextProvider } from './home/HomeContext';
import { ModalContextProvider } from './modal/ModalContext';
import { MusicsContextProvider } from './music/MusicsContext';
import { PlayerContextProvider } from './player/PlayerContext';
import { CommentContextProvider } from './comments/CommentContext';

export function App() {
  return (
    <UserContextProvider>
      <MusicsContextProvider>
        <PlayerContextProvider>
          <ModalContextProvider>
            <HomeContextProvider>
              <CommentContextProvider>
                <Routes />
              </CommentContextProvider>
            </HomeContextProvider>
          </ModalContextProvider>
        </PlayerContextProvider>
      </MusicsContextProvider>
    </UserContextProvider>
  );
}
