import { Music } from '../music/Music';
import { useMusics } from '../music/MusicsContext';
import { formatMusicTime } from './formatMusicTime';

interface MusicTableProps{
    musics:Music[]
}

export function MusicTable({ musics }:MusicTableProps) {
  const { setMusic } = useMusics();

  return (
    <table className="w-full table-auto border-spacing-1 border-separate">
      {musics.map((music) => (
        <tr>
          <td className="w-12">
            <img
              alt={music.name}
              src={music.image}
              className="bg-gray-200 aspect-square rounded w-12"
            />
          </td>
          <td>
            <button onClick={() => setMusic(music)} className="hover:underline py-2">
              {music.name}
            </button>
          </td>
          <td className="opacity-50">
            {music.artist?.name}
          </td>
          <td className="opacity-50">
            {formatMusicTime(music.duration) }
          </td>
        </tr>
      ))}
    </table>
  );
}
