import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicTable } from '../common/MusicTable';
import { Music } from '../music/Music';
import { NavSpacer } from '../nav/NavSpacer';
import { LikeButton } from './LikeButton';

export function Favorites() {
  const [musics, setMusics] = useState<Music[]>();
  const [error, setError] = useState(false);

  async function getMusics() {
    try {
      const res = await api.get('/musics/favorites');
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

  if (musics && !musics.length) {
    return (
      <div className="warn">
        <div>
          The musics you click the like button
          <div className="flex center">
            <LikeButton alreadyLiked={false} />
          </div>
          will appear here
        </div>
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
