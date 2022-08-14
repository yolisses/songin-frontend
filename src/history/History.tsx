import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicTable } from '../common/MusicTable';
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

  if (!musics) return null;

  return (<MusicTable musics={musics} />);
}
