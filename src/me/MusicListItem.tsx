import { Music } from '../music/Music';
import { usePlayer } from '../player/PlayerContext';

interface MusicListItemProps{
    music:Music
}

export function MusicListItem({ music }:MusicListItemProps) {
  const { setMusic } = usePlayer();

  return (
    <li>
      <button type="button" className="flex flex-row items-center p-1 gap-2 w-full text-start">
        <img
          className="w-12 aspect-square rounded"
          src={music.image}
          alt=""
        />
        <div>
          <div>{music.name}</div>
          <div className="text-sm text-gray-500">{music.artist?.name}</div>
        </div>
      </button>
    </li>
  );
}
