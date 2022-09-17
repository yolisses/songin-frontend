import './ProfilePage.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Profile } from './Profile';
import { Favorites } from '../like/Favorites';
import { FollowButton } from './FollowButton';
import { NumberIndicator } from './NumberIndicator';
import { MusicTable } from '../common/MusicTable';

export function ProfilePage() {
  const { nick } = useParams();
  const [profile, setProfile] = useState<Profile>();
  const loading = profile === undefined;

  async function getUser() {
    setProfile(undefined);
    const res = await api.get(`/profile/nick/${nick}`);
    setProfile(res.data);
  }

  useEffect(() => {
    getUser();
  }, [nick]);

  return (
    <div className="w-full flex flex-col profile-page">
      <div
        className="w-full relative h-64 z-0 bg-zinc-700 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: profile ? `url("${profile.user?.coverImage}")` : undefined }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50" />
        <div className="p-4 text-white z-10 relative gap-2 h-full flex flex-col justify-between">
          <div className="gap-4 lg:justify-around flex flex-col lg:flex-row items-center justify-center">
            <div className="flex flex-row items-center gap-4">
              {loading
                ? <div className="aspect-square h-32 md:h-40 rounded-full loading" />
                : (
                  <img
                    alt={profile.user?.name}
                    src={profile.user?.image}
                    className="aspect-square w-32 md:w-40 rounded-full"
                  />
                )}
              <div>
                <div className="text-2xl">
                  { loading
                    ? <div className="loading w-48 mb-1">&nbsp;</div>
                    : profile?.user?.name}
                </div>
                <div className="opacity-80">
                  { loading
                    ? <div className="loading w-32">&nbsp;</div>
                    : `@${profile?.user?.nick}`}
                </div>
              </div>
            </div>
            <div className="max-w-sm">
              {profile?.user?.bio}
            </div>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <NumberIndicator
              label="Following"
              amount={profile?.followingCounter}
            />
            <NumberIndicator
              label="Followers"
              amount={profile?.followersCounter}
            />
            <FollowButton user={profile?.user} />
            <div className="flex-1" />
          </div>
        </div>
      </div>
      <section className="p-2">
        <h2 className="text-lg">
          Favorites
        </h2>
        {loading
          ? <MusicTable loadingCount={8} />
          : <Favorites user={profile.user} />}
      </section>
    </div>
  );
}
