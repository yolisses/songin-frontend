import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicTable } from '../common/MusicTable';
import { Music } from '../music/Music';
import { NavSpacer } from '../nav/NavSpacer';

export function Favorites() {
  const [musics, setMusics] = useState<Music[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getMusics() {
    setLoading(true);
    try {
      const res = await api.get('/musics/favorites');
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
      <div className="flex flex-col gap-8 center text-lg expand fixed">
        Something gone wrong loading the favorites
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
