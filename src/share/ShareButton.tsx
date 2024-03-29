import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { FaShare } from 'react-icons/fa';
import { FloatingCounter } from '../player/FloatingCounter';

interface ShareButtonProps{
    setShare:Dispatch<SetStateAction<boolean>>
}

export function ShareButton({ setShare }:ShareButtonProps) {
  function handleShareClick(e:MouseEvent) {
    e.stopPropagation();
    setShare((value) => !value);
  }

  const iconsSize = 24;
  return (
    <FloatingCounter count={130}>
      <button
        className="group p-2"
        onClick={handleShareClick}
      >
        <FaShare className="transition-transform group-active:scale-50" size={iconsSize} />
      </button>
    </FloatingCounter>
  );
}
