import { Music } from '../music/Music';

interface MusicTableProps{
    musics:Music[]
}

export function MusicTable({ musics }:MusicTableProps) {
  return (
    <table className="w-full table-auto border-spacing-1 border-separate">
      {musics.map((music) => (
        <tr>
          <td className="w-12">
            <img
              alt={music.name}
              src={music.image}
              className="aspect-square rounded w-12"
            />
          </td>
          <td>
            {music.name}
          </td>
          <td className="opacity-50">
            {music.artist?.name}
          </td>
          <td className="opacity-50">
            {music.duration }
          </td>
        </tr>
      ))}
    </table>
  );
}
