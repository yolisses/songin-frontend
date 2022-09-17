import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { MusicTable } from '../common/MusicTable';
import { Music } from '../music/Music';
import { User } from '../user/User';
import { LikeButton } from './LikeButton';
import { NavSpacer } from '../nav/NavSpacer';
import { useUser } from '../user/UserContext';

interface Props{
  user?:User
}

export function Favorites({ user }:Props) {
  const [musics, setMusics] = useState<Music[]>();
  const [error, setError] = useState(false);
  const { user: currentUser } = useUser();

  async function getMusics() {
    if (user !== undefined) {
      try {
        setError(false);
        const res = await api.get(`/users/${user.id}/favorites`);
        setMusics(res.data);
      } catch {
        setError(true);
      }
    }
  }
  useEffect(() => {
    getMusics();
  }, [user]);

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
    if (user?.id === currentUser?.id) {
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
      <div className="warn">
        No favorites to show
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
