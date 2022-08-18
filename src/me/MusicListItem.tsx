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
      className="flex flex-row items-center p-1 gap-2 flex-1 text-start"
    >
      <img
        alt={music.name}
        src={music.image}
        className="w-12 aspect-square rounded bg-gray-200"
      />
      <div>
        <button>{music.name}</button>
        <Link
          to={`/@${music.artist?.name}`}
          className="text-sm text-white text-opacity-70 block"
        >
          {music.artist?.name}
        </Link>
      </div>
    </button>
  );
}
