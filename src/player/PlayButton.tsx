import { IconType } from 'react-icons';
import { FaPause, FaPlay } from 'react-icons/fa';
import { usePlayer } from './PlayerContext';

export function PlayButton() {
  const { isPlaying, setIsPlaying } = usePlayer();

  function handleClick() {
    setIsPlaying((value) => !value);
  }

  const Icon: IconType = isPlaying ? FaPause : FaPlay;

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full text-2xl group"
    >
      <div className="group-active:scale-75 transition-transform">
        <Icon />
      </div>
    </button>
  );
}
