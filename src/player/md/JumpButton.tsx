import { FaStepBackward, FaStepForward } from 'react-icons/fa';
import { useMusics } from '../../music/MusicsContext';

interface JumpButtonProps{
    foward:boolean
}

export function JumpButton({ foward }:JumpButtonProps) {
  const { jumpMusic } = useMusics();

  function handleClick() {
    jumpMusic(foward);
  }

  return (
    <button className="p-2" onClick={handleClick}>
      {foward ? <FaStepForward /> : <FaStepBackward />}
    </button>
  );
}
