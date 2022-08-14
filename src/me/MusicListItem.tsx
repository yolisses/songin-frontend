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
        className="w-12 aspect-square rounded bg-gray-300"
        src={music.image}
        alt=""
      />
      <div>
        <button>{music.name}</button>
        <div className="text-sm text-white text-opacity-70">{music.artist?.name}</div>
      </div>
    </button>
  );
}
