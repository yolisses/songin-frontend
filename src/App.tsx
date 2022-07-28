import { PlayerContextProvider } from './player/PlayerContext';
import { Routes } from './Routes';
import { UserContextProvider } from './user/UserContext';

export function App() {
  return (
    <UserContextProvider>
      <PlayerContextProvider>
        <Routes />
      </PlayerContextProvider>
    </UserContextProvider>
  );
}
