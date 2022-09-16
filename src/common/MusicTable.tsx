import { repeat } from './repeat';
import { Music } from '../music/Music';
import { MusicTableItem } from './MusicTableItem';

interface MusicTableProps{
  musics?:Music[]
  loadingCount?:number
}

export function MusicTable({ musics, loadingCount }:MusicTableProps) {
  return (
    <table className="w-full table-auto border-collapse">
      {musics ? musics.map((music) => (
        <MusicTableItem
          music={music}
          key={music.id}
        />
      ))
        : repeat(<MusicTableItem />, loadingCount || 10)}
    </table>
  );
}
