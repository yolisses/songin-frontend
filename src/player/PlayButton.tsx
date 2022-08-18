import { FaPause, FaPlay } from 'react-icons/fa';
import { usePlayer } from './PlayerContext';

export function PlayButton() {
  const { isPlaying, setIsPlaying } = usePlayer();

  function handleClick() {
    setIsPlaying((value) => !value);
  }

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full text-2xl"
    >
      { isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
}
