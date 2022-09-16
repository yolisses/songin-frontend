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
    console.log(res.data);
    setMusics(res.data);
    setLoading(false);
  }
  useEffect(() => {
    getMusics();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 center text-lg fixed expand-directions">
        <Spinner />
        Getting the updated history
      </div>
    );
  }

  if (!musics) return null;

  return (<MusicTable musics={musics} />);
}
