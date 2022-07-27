import { AppRoutes } from './AppRoutes';
import { UserContextProvider } from './user/UserContext';

export function App() {
  return (
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  );
}
