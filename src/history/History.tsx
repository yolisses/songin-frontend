import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicTable } from '../common/MusicTable';
import { Music } from '../music/Music';
import { NavSpacer } from '../nav/NavSpacer';

export function History() {
  const [musics, setMusics] = useState<Music[]>();
  const [error, setError] = useState(false);

  async function getMusics() {
    try {
      const res = await api.get('/musics/history');
      setMusics(res.data);
    } catch {
      setError(true);
    }
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
          className="main-button"
        >
          Try again
        </button>
      </div>
    );
  }

  if (musics && !musics.length) {
    return (
      <div className="warn">
        The songs you listen to will appear here
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
