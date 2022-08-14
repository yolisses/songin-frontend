import { MusicList } from '../me/MusicList';
import { useMusics } from '../music/MusicsContext';

export function NextMusics() {
  const { musics } = useMusics();

  return (
    <div>
      {musics && <MusicList musics={musics} />}
    </div>
  );
}
