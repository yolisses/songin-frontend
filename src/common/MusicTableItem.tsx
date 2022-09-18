import { Link } from 'react-router-dom';
import { Music } from '../music/Music';
import { useMusics } from '../music/MusicsContext';
import { formatMusicTime } from './formatMusicTime';
import { image } from './image';
import { LoadingLine } from './LoadingLine';

interface MusicTableItemProps{
    music?:Music
  }

export function MusicTableItem({ music }:MusicTableItemProps) {
  const { setMusic } = useMusics();
  const loading = music === undefined;

  function handleClick() {
    if (music) {
      setMusic(music);
    }
  }

  return (
    <tr className="active-opacity rounded-lg">
      <td className="w-14">
        {loading ? (
          <div
            className="loading aspect-square rounded w-12"
          />
        )
          : (
            <img
              alt={music.name}
              src={image(music, 128)}
              className="aspect-square rounded w-12"
            />
          )}
      </td>
      <td>
        {loading
          ? <LoadingLine w={32} />
          : (
            <button
              onClick={handleClick}
              className="text-left hover:underline py-2"
            >
              {music.name}
            </button>
          )}
      </td>
      <td>
        {loading
          ? <LoadingLine w={24} />
          : (
            <Link
              to={`/@${music.artist?.name}`}
              className="opacity-60 hover:underline"
            >
              {music.artist?.name}
            </Link>
          )}
      </td>
      <td className="opacity-60 pr-2">
        {loading
          ? <LoadingLine w={10} />
          : formatMusicTime(music.duration)}
      </td>
    </tr>
  );
}
