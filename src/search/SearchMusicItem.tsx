import { formatMusicTime } from '../common/formatMusicTime';
import { image } from '../common/image';
import { Music } from '../music/Music';
import { useMusics } from '../music/MusicsContext';

interface Props{
    music:Music
}

export function SearchMusicItem({ music }:Props) {
  const { setMusic } = useMusics();

  function handleClick() {
    setMusic(music);
  }

  return (
    <button
      onClick={handleClick}
      className="text-left flex flex-row gap-2 active-opacity items-center w-full p-2 pr-4 rounded-lg"
    >
      <img
        alt={music.name}
        src={image(music, 64)}
        className="rounded-lg aspect-square w-16"
      />
      <div>
        <div>
          {music.name}
        </div>
        <div className="opacity-50">
          {music.artist?.name || 'Lorem ipsum dolor sit amet'}
        </div>
      </div>
      <div className="ml-auto opacity-50">
        {formatMusicTime(music.duration)}
      </div>
    </button>
  );
}
