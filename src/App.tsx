import { Routes } from './Routes';
import { UserContextProvider } from './user/UserContext';

export function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}
