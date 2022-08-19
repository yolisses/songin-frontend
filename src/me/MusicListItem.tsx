import { Link } from 'react-router-dom';
import { Music } from '../music/Music';
import { useMusics } from '../music/MusicsContext';

interface MusicListItemProps{
    music:Music
}

export function MusicListItem({ music }:MusicListItemProps) {
  const { setMusic } = useMusics();

  function handleClick() {
    setMusic(music);
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-row items-center p-1 gap-2 flex-1 text-start rounded-lg hover:bg-black hover:bg-opacity-5"
    >
      <img
        alt={music.name}
        src={music.image}
        className="w-12 aspect-square rounded bg-gray-200"
      />
      <div>
        <div>{music.name}</div>
        <div className="text-sm text-white text-opacity-70">
          {music.artist?.name}
        </div>
      </div>
    </button>
  );
}
