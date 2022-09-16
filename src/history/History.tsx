import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicTable } from '../common/MusicTable';
import { Music } from '../music/Music';
import { NavSpacer } from '../nav/NavSpacer';

export function History() {
  const [musics, setMusics] = useState<Music[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getMusics() {
    setLoading(true);
    try {
      const res = await api.get('/musics/history');
      setMusics(res.data);
    } catch {
      setError(true);
    }
    setLoading(false);
  }
  useEffect(() => {
    getMusics();
  }, []);

  if (error) {
    return (
      <div className="warn">
        Something gone wrong loading the history
        <button
          onClick={getMusics}
          className="bg-blue-500 rounded-lg p-2"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <>
      <MusicTable musics={musics} />
      <NavSpacer />
    </>
  );
}
