import { Music } from '../music/Music';
import { MusicListItem } from './MusicListItem';

interface MusicListProps{
    musics:Music[]
}

export function MusicList({ musics }:MusicListProps) {
  return (
    <div className="flex flex-col">
      {musics.map((music) => (
        <MusicListItem
          key={music.id}
          music={music}
        />
      ))}
    </div>
  );
}
