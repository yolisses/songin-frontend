import { FaHome, FaPlay, FaUser } from 'react-icons/fa';
import { NavButton } from './NavButton';

interface NavProps{
  white?:boolean
  spacer?:boolean
}

export function Nav({ white = true, spacer = true }:NavProps) {
  return (
    <>
      {spacer && <div className="h-12" />}
      <div
        className="fixed bottom-0 z-10 h-12 justify-around w-full items-center text-center flex flex-row gap-2"
        style={{ backgroundColor: white ? 'white' : undefined }}
      >
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
