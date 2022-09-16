/* eslint-disable react/jsx-no-useless-fragment */
import { FaHome, FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { useMd } from '../responsive/useMd';
import { NavItem } from './NavItem';
import { NavPlayButton } from './NavPlayButton';

interface NavProps{
  spacer?:boolean
}

export function Nav({ spacer = true }:NavProps) {
  const md = useMd();
  const { pathname } = useLocation();
  const playerPage = pathname === '/player';

  if (md) return null;

  return (
    <>
      {spacer && <div className="h-12" />}
      <div
        className="fixed bottom-0 z-10 h-12 justify-around w-screen items-center text-center flex flex-row gap-2"
        style={{ backgroundColor: playerPage ? undefined : 'rgb(24 24 27)' }}
      >
        <NavPlayButton />
        <NavItem
          to="/"
          Icon={FaHome}
          text="Início"
        />
        <NavItem
          to="/me"
          text="Eu"
          Icon={FaUser}
        />
      </div>
    </>
  );
}
