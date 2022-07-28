import { FaHome, FaPlay, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavButton } from './NavButton';

export function Nav() {
  return (
    <>
      <div className="h-16" />
      <div className="fixed bottom-0 z-10 h-16 justify-around w-full items-center text-center flex flex-row gap-2">
        <NavButton
          to="/player"
          Icon={FaPlay}
          text="Música"
        />
        <NavButton
          to="/"
          Icon={FaHome}
          text="Início"
        />
        <NavButton
          to="/me"
          text="Eu"
          Icon={FaUser}
        />
      </div>
    </>
  );
}
