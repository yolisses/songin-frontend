import { MusicsContextProvider } from './music/MusicsContext';
import { LateralNav } from './nav/LateralNav';
import { PlayerBar } from './player/PlayerBar';
import { PlayerContextProvider } from './player/PlayerContext';
import { Routes } from './Routes';
import { UserContextProvider } from './user/UserContext';

export function App() {
  return (
    <UserContextProvider>
      <MusicsContextProvider>
        <PlayerContextProvider>
          <Routes />
          <PlayerBar />
        </PlayerContextProvider>
      </MusicsContextProvider>
    </UserContextProvider>
  );
}
