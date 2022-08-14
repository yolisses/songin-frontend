import { Dispatch, SetStateAction } from 'react';
import { FaShare } from 'react-icons/fa';
import { FloatingCounter } from '../player/FloatingCounter';

interface ShareButtonProps{
    setShare:Dispatch<SetStateAction<boolean>>
}

export function ShareButton({ setShare }:ShareButtonProps) {
  function handleShareClick() {
    setShare((value) => !value);
  }

  const iconsSize = 24;
  return (
    <FloatingCounter count={130}>
      <button
        onClick={handleShareClick}
        className="group"
      >
        <FaShare className="transition group-active:scale-50" size={iconsSize} />
      </button>
    </FloatingCounter>
  );
}
