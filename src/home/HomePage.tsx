import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/config">go to config</Link>
    </div>
  );
}
