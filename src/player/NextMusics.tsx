import { MusicListItem } from '../me/MusicListItem';
import { useMusics } from '../music/MusicsContext';

export function NextMusics() {
  const { musics } = useMusics();

  if (!musics) return null;

  return (
    <>
      { musics.map((music) => (
        <MusicListItem
          key={music.id}
          music={music}
        />
      ))}
    </>
  );
}
