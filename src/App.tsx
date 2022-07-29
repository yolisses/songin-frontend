import { MusicContextProvider } from './music/MusicContext';
import { PlayerContextProvider } from './player/PlayerContext';
import { Routes } from './Routes';
import { UserContextProvider } from './user/UserContext';

export function App() {
  return (
    <UserContextProvider>
      <MusicContextProvider>
        <PlayerContextProvider>
          <Routes />
        </PlayerContextProvider>
      </MusicContextProvider>
    </UserContextProvider>
  );
}
