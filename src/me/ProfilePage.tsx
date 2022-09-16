import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaUser } from 'react-icons/fa';

import { api } from '../api/api';
import { Profile } from './Profile';
import { useQuery } from '../common/useQuery';
import { Favorites } from '../like/Favorites';
import { useUser } from '../user/UserContext';
import { NumberIndicator } from './NumberIndicator';

export function ProfilePage() {
  const { username } = useParams();
  const { user: currentUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile>();

  const query = useQuery();
  const me = query.get('me');

  async function getUser() {
    setLoading(true);
    const res = await api.get(`/profile/nick/${username}`);
    setProfile(res.data);
    setLoading(false);
  }

  useEffect(() => {
    if (!profile) {
      getUser();
    }
  }, []);

  if (loading || !profile) {
    return null;
  }

  const {
    user,
    following,
    followersCounter,
    followingCounter,
  } = profile;
  const isCurrent = user?.id !== currentUser?.id;

  return (
    <div className="w-full flex flex-col">
      <div
        className="w-full relative h-64 z-0 bg-gray-500 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("${user?.coverImage}")` }}
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
                alt={user?.name}
                src={user?.image}
                className="aspect-square h-32 md:h-40 rounded-full"
              />
              <div>
                <div className="text-2xl">{user?.name}</div>
                <div className="opacity-80">
                  @
                  {user?.nick}
                </div>
              </div>
            </div>
            <div className="max-w-sm">
              {user?.bio}
            </div>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <NumberIndicator
              label="Following"
              amount={followingCounter}
            />
            <NumberIndicator
              label="Followers"
              amount={followersCounter}
            />
            {(!isCurrent && !following) ? (
              <button className="flex flex-row items-center gap-2 md:mr-auto">
                <FaUser />
                Follow
              </button>
            ) : <div className="hidden md:block md:mr-auto" />}
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2 className="text-lg">
          Favorites
        </h2>
        <Favorites />
      </div>
    </div>
  );
}
