/* eslint-disable react/jsx-no-useless-fragment */
import { FaHome, FaUser } from 'react-icons/fa';
import { useMd } from '../responsive/useMd';
import { NavButton } from './NavButton';
import { PlayButton } from './PlayButton';

interface NavProps{
  white?:boolean
  spacer?:boolean
}

export function Nav({ white = true, spacer = true }:NavProps) {
  const md = useMd();
  if (md) {
    return <></>;
  }

  return (
    <>
      {spacer && <div className="h-12" />}
      <div
        className="fixed bottom-0 z-10 h-12 justify-around w-full items-center text-center flex flex-row gap-2"
        style={{ backgroundColor: white ? 'white' : undefined }}
      >
        <PlayButton />
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
