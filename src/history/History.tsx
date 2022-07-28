import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicList } from '../me/MusicList';
import { Music } from '../music/Music';

export function History() {
  const [musics, setMusics] = useState<Music[]>();

  async function getMusics() {
    const res = await api.get('musics/history');
    setMusics(res.data);
  }

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <div className="px-2">
      {musics && <MusicList musics={musics} />}
    </div>
  );
}
