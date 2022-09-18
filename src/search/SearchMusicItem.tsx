import { formatMusicTime } from '../common/formatMusicTime';
import { image } from '../common/image';
import { LoadingLine } from '../common/LoadingLine';
import { Music } from '../music/Music';
import { useMusics } from '../music/MusicsContext';

interface Props{
    music?:Music
}

export function SearchMusicItem({ music }:Props) {
  const { setMusic } = useMusics();

  function handleClick() {
    if (music) {
      setMusic(music);
    }
  }

  const loading = music === undefined;

  return (
    <button
      onClick={handleClick}
      className="text-left flex flex-row gap-2 active-opacity items-center w-full p-2 pr-4 rounded-lg"
    >
      {loading
        ? <div className="rounded-lg aspect-square w-16 loading" />
        : (
          <img
            alt={music.name}
            src={image(music, 64)}
            className="rounded-lg aspect-square w-16"
          />
        )}
      <div>
        <div>
          {loading
            ? <LoadingLine w={32} />
            : music.name}
        </div>
        <div className="opacity-50">
          {loading
            ? <LoadingLine w={44} />
            : music.artist?.name}
        </div>
      </div>
      <div className="ml-auto opacity-50">
        {loading
          ? <LoadingLine w={10} />
          : formatMusicTime(music.duration)}
      </div>
    </button>
  );
}
