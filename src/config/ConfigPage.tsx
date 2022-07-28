import { Link } from 'react-router-dom';
import { useUser } from '../user/UserContext';

export function ConfigPage() {
  const { logout } = useUser();
  return (
    <div>
      <h1>Config page</h1>
      <Link to="/">go to home</Link>
      <div>
        <button type="button" onClick={logout}>Log out</button>
      </div>
    </div>
  );
}
