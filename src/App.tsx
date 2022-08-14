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
          <div className="flex flex-row overflow-x-hidden">
            <LateralNav />
            <Routes />
          </div>
          <PlayerBar />
        </PlayerContextProvider>
      </MusicsContextProvider>
    </UserContextProvider>
  );
}
