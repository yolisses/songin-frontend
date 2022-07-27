import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import { HomePage } from '../home/HomePage';
import { SignInPage } from '../signIn/SignInPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="teste" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
