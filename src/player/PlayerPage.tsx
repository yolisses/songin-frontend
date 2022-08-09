import { useEffect, useState } from 'react';
import { FaComment, FaShare } from 'react-icons/fa';
import { api } from '../api/api';
import { LikeButton } from '../like/LikeButton';
import { Music } from '../music/Music';
import { Nav } from '../nav/Nav';
import { ShareButtons } from '../share/ShareButtons';
import { FloatingCounter } from './FloatingCounter';
import { GradientBackground } from './GradientBackground';
import { PlayerRange } from './PlayerRange';

export function PlayerPage() {
  const [musics, setMusics] = useState<Music[]>();
  const [share, setShare] = useState(false);
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
                <div className="overflow-hidden">
                  {share
                  && (
                  <div className="flex flex-col items-start animate-slide-up">
                    <div className="bg-gray-500 bg-opacity-80 rounded-full flex flex-row gap-1 items-center p-1">
                      <ShareButtons
                        size={40}
                        url={`https://musiks.com/music/${music.id}`}
                      />
                    </div>
                    <div
                      className="w-0 h-0 border-solid ml-[7.25rem]"
                      style={{
                        borderWidth: '0.5rem 0.5rem 0 0.5rem',
                        borderColor: 'rgba(107,114,128,0.8) transparent transparent transparent',
                      }}
                    />
                  </div>
                  )}
                </div>
                <div className="flex flex-row gap-8">
                  <LikeButton music={music} />
                  <FloatingCounter count={130}>
                    <button type="button">
                      <FaComment size={iconsSize} />
                    </button>
                  </FloatingCounter>
                  <FloatingCounter count={130}>
                    <button type="button" onClick={() => setShare((value) => !value)}>
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
