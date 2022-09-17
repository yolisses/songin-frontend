/* eslint-disable react/jsx-no-useless-fragment */
import { FaHome, FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { useMd } from '../responsive/useMd';
import { NavItem } from './NavItem';
import { NavPlayButton } from './NavPlayButton';

export function Nav() {
  const md = useMd();
  const { pathname } = useLocation();
  const playerPage = pathname === '/player';

  if (md) return null;

  return (
    <div
      style={{ backgroundColor: playerPage ? undefined : 'rgb(24 24 27)' }}
      className="fixed bottom-0 right-0 left-0 z-10 h-12 justify-around text-center flex flex-row gap-2 items-center"
    >
      <NavPlayButton />
      <NavItem
        to="/"
        Icon={FaHome}
        text="Home"
      />
      <NavItem
        to="/me"
        text="Me"
        Icon={FaUser}
      />
    </div>
  );
}
