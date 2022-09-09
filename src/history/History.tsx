import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicTable } from '../common/MusicTable';
import { Spinner } from '../common/Spinner';
import { Music } from '../music/Music';

export function History() {
  const [musics, setMusics] = useState<Music[]>();
  const [loading, setLoading] = useState(true);

  async function getMusics() {
    const res = await api.get('musics/history');
    setMusics(res.data);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex flex-col gap-4 center text-lg fixed expand-directions pointer-events-none">
        <Spinner />
        Getting the updated history
      </div>
    );
  }

  useEffect(() => {
    getMusics();
  }, []);

  if (!musics) return null;

  return (<MusicTable musics={musics} />);
}
