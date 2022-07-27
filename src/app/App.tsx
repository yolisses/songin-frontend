import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import { HomePage } from '../home/HomePage';
import { SignInPage } from '../signIn/SignInPage';
import { UserContextProvider, useUser } from '../user/UserContext';

export function App() {
  const { user } = useUser();

  return (
    <UserContextProvider>
      <BrowserRouter>
        {user
          ? (
            <Routes>
              <Route path="teste" element={<HomePage />} />
            </Routes>
          )
          : <SignInPage />}
      </BrowserRouter>
    </UserContextProvider>
  );
}
