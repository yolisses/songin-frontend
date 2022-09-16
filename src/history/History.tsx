import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicTable } from '../common/MusicTable';
import { Spinner } from '../common/Spinner';
import { Music } from '../music/Music';

export function History() {
  const [musics, setMusics] = useState<Music[]>();
  const [loading, setLoading] = useState(true);

  async function getMusics() {
    setLoading(true);
    const res = await api.get('/musics/history');
    setMusics(res.data);
    setLoading(false);
  }
  useEffect(() => {
    getMusics();
  }, []);

  return <MusicTable musics={musics} />;
}
