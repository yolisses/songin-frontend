import { FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { api } from '../common/api';
import { User } from '../user/User';
import { Music } from '../music/Music';
import { NavSpacer } from '../nav/NavSpacer';
import { useUser } from '../user/UserContext';
import { MusicTable } from '../common/MusicTable';

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
          className="main-button"
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
            <FaHeart
              size={22}
              className="inline mx-1"
            />
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
