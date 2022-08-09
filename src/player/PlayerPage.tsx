import { useEffect, useState } from 'react';
import { FaComment, FaShare } from 'react-icons/fa';
import { api } from '../api/api';
import { LikeButton } from '../like/LikeButton';
import { Music } from '../music/Music';
import { Nav } from '../nav/Nav';
import { FloatingCounter } from './FloatingCounter';
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

  // const musics:Music[] = [];
  return (
    <>
      <GradientBackground />
      <div className="flex flex-col h-screen py-20 overflow-y-scroll no-scrollbar snap-y snap-mandatory text-white">
        {musics && musics.map((music) => (

          <div
            key={music.id}
            className="h-screen w-screen overflow-hidden snap-start flex-shrink-0 relative"
          >

            <div
              className="absolute -z-40 w-screen h-screen bg-cover bg-center bg-no-repeat blur-lg scale-110"
              style={{ backgroundImage: `url("${music.image}")` }}
            />
            <img
              src={music.image}
              alt={music.name}
              className="mask absolute -z-30 w-screen aspect-square max-w-[100vh]
        -translate-y-1/2 top-1/2 translate-x-1/2 right-1/2 "
            />
            <div
              className="bottom-0 absolute w-screen"
            >
              <div className="px-4 flex flex-col gap-4">
                <div className="flex flex-col pb-2">
                  <div className="text-xl">
                    {music.name}
                  </div>
                  <div className="">
                    {music.artist?.name}
                  </div>
                </div>
                <div className="flex flex-row gap-8">
                  <LikeButton music={music} />
                  <FloatingCounter count={130}>
                    <button type="button">
                      <FaComment size={iconsSize} />
                    </button>
                  </FloatingCounter>
                  <FloatingCounter count={130}>
                    <button type="button">
                      <FaShare size={iconsSize} />
                    </button>
                  </FloatingCounter>
                </div>
                <PlayerRange />
              </div>
              <div className="h-16" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 -z-10 w-screen h-60 bg-gradient-to-t from-[#000d] via-[#000a] to-transparent" />
      <div className="absolute bottom-0 text-white ">
        <Nav white={false} />
      </div>
    </>
  );
}
