import { Link } from 'react-router-dom';
import { Music } from '../music/Music';
import { useMusics } from '../music/MusicsContext';
import { formatMusicTime } from './formatMusicTime';

interface MusicTableProps{
    musics:Music[]
}

export function MusicTable({ musics }:MusicTableProps) {
  const { setMusic } = useMusics();

  return (
    <table className="w-full table-auto border-collapse">
      {musics.map((music) => (
        <tr className="active-opacity rounded-lg">
          <td className="w-12">
            <img
              alt={music.name}
              src={music.image}
              className="aspect-square rounded w-12 mr-2"
            />
          </td>
          <td>
            <button onClick={() => setMusic(music)} className="hover:underline py-2">
              {music.name}
            </button>
          </td>
          <td>
            <Link
              to={`/@${music.artist?.name}`}
              className="opacity-60 hover:underline"
            >
              {music.artist?.name}
            </Link>
          </td>
          <td className="opacity-60">
            {formatMusicTime(music.duration) }
          </td>
        </tr>
      ))}
    </table>
  );
}
