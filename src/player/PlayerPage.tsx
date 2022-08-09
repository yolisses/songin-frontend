import { useEffect, useState } from 'react';
import { FaComment, FaShare } from 'react-icons/fa';
import { api } from '../api/api';
import { LikeButton } from '../like/LikeButton';
import { Music } from '../music/Music';
import { Nav } from '../nav/Nav';
import { GradientBackground } from './GradientBackground';
import { PlayerRange } from './PlayerRange';

export function PlayerPage() {
  const [musics, setMusics] = useState<Music[]>();
  const iconsSize = 24;

  async function getMusics() {
    const res = await api.get('/musics');
    setMusics(res.data);
  }

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <>
      <GradientBackground />
      <div className="flex flex-col h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory text-white">
        {musics && musics.map((music) => (

          <div
            key={music.id}
            className="h-screen snap-start flex-shrink-0 relative"
          >
            <div
              className="bottom-0 absolute w-screen"
            >
              <div className="px-4 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="text-xl">
                    {music.name}
                  </div>
                  <div className="">
                    {music.artist?.name}
                  </div>
                </div>
                <div className="flex flex-row gap-6">
                  <LikeButton />
                  <button type="button">
                    <FaComment size={iconsSize} />
                  </button>
                  <button type="button">
                    <FaShare size={iconsSize} />
                  </button>
                </div>
                <PlayerRange />
              </div>
              <div className="h-16" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-white absolute bottom-0">
        <Nav white={false} />
      </div>
    </>
  );
}
