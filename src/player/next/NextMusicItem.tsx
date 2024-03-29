import { image } from '../../common/image';
import { Music } from '../../music/Music';
import { useMusics } from '../../music/MusicsContext';

interface MusicListItemProps{
    music:Music
}

export function NextMusicItem({ music }:MusicListItemProps) {
  const { setMusic } = useMusics();

  function handleClick() {
    setMusic(music);
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-row items-center p-1 gap-2 flex-1 text-start rounded-lg hover:bg-white hover:bg-opacity-10"
    >
      <img
        alt={music.name}
        src={image(music, 64)}
        className="w-12 aspect-square rounded"
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
