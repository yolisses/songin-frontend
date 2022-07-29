import { Music } from '../music/Music';
import { useMusic } from '../music/MusicContext';

interface MusicListItemProps{
    music:Music
}

export function MusicListItem({ music }:MusicListItemProps) {
  const { setMusic } = useMusic();

  function handleClick() {
    setMusic(music);
  }
  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className="flex flex-row items-center p-1 gap-2 w-full text-start"
      >
        <img
          className="w-12 aspect-square rounded bg-gray-300"
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
