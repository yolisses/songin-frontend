import { MusicListItem } from '../me/MusicListItem';
import { useMusics } from '../music/MusicsContext';

export function NextMusics() {
  const { musics } = useMusics();

  if (!musics) return null;

  return (
    <div className="w-full flex flex-col gap-2 py-2">
      { musics.map((music) => (
        <MusicListItem
          key={music.id}
          music={music}
        />
      ))}
    </div>
  );
}
