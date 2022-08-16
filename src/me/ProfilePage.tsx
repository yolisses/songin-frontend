import { useEffect, useState } from 'react';
import { FaChevronLeft, FaUser } from 'react-icons/fa';
import { useParams, useOutlet } from 'react-router';
import { Link } from 'react-router-dom';
import { api } from '../api/api';
import { useQuery } from '../common/useQuery';
import { Favorites } from '../like/Favorites';
import { User } from '../user/User';
import { useUser } from '../user/UserContext';
import { NumberIndicator } from './NumberIndicator';

interface ProfilePageProps{
  fixedUsername?:string
}

export function ProfilePage({ fixedUsername }:ProfilePageProps) {
  const [user, setUser] = useState<User>();
  const { user: currentUser } = useUser();
  const username = fixedUsername || useParams().username;

  const query = useQuery();
  const me = query.get('me');

  async function getUser() {
    const res = await api.get(`/users/username/${username}`);

    if (Array.isArray(res.data)) {
      setUser(res.data[0]);
    } else setUser(res.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;

  return (
    <div className="w-full flex flex-col">
      <div
        className="w-full relative h-96 z-0 bg-gray-500 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("${user.coverImage}")` }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50" />
        <div className="p-4 text-white z-10 relative gap-2 h-full flex flex-col justify-between">
          {me ? (
            <Link to="/me">
              <FaChevronLeft size={20} />
            </Link>
          ) : <div className="hidden lg:block" />}
          <div className="gap-4 lg:justify-around flex flex-col lg:flex-row items-center justify-center">
            <div className="flex flex-row items-center gap-4">
              <img
                alt={user.name}
                src={user.image}
                className=" aspect-square h-32 md:h-40 rounded-full"
              />
              <div>
                <div className="text-2xl">{user.name}</div>
                <div className="opacity-80">
                  @
                  {user.username}
                </div>
              </div>
            </div>
            <div className="max-w-sm">
              {user.bio}
            </div>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <NumberIndicator label="Curtidas" amount={2493} />
            <NumberIndicator label="Seguindo" amount={432} />
            <NumberIndicator label="Seguidores" amount={498} />
            {username !== currentUser.username ? (
              <button className="flex flex-row items-center gap-2 md:mr-auto">
                <FaUser />
                Seguir
              </button>
            ) : <div className="hidden md:block md:mr-auto" />}
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2 className="text-lg">
          Músicas favoritas
        </h2>
        <Favorites />
      </div>
    </div>
  );
}
