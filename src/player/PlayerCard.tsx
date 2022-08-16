import {
  Dispatch, SetStateAction, useEffect, useRef, useState,
} from 'react';
import { FaComment } from 'react-icons/fa';
import { Music } from '../music/Music';
import { PlayerRange } from './PlayerRange';
import { LikeButton } from '../like/LikeButton';
import { FloatingCounter } from './FloatingCounter';
import { ShareButton } from '../share/ShareButton';
import { ShareBallon } from '../share/ShareBallon';

interface PlayerCardProps{
    music:Music
    setNewMusic:Dispatch<SetStateAction<Music|undefined>>
}

export function PlayerCard({ music, setNewMusic }:PlayerCardProps) {
  const [share, setShare] = useState(false);
  const iconsSize = 24;
  const ref = useRef();

  function closeShare() {
    setShare(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      setNewMusic(music);
    }, { threshold: 0.80 });
    observer.observe(ref.current as any);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref as any}
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
            {share && (
            <ShareBallon
              music={music}
              // eslint-disable-next-line react/jsx-no-bind
              close={closeShare}
            />
            )}
          </div>
          <div className="flex flex-row gap-8">
            <LikeButton music={music} alreadyLiked={music.liked} />
            <FloatingCounter count={130}>
              <button>
                <FaComment size={iconsSize} />
              </button>
            </FloatingCounter>
            <ShareButton setShare={setShare} />
          </div>
          <PlayerRange />
        </div>
        <div className="h-16" />
      </div>
    </div>
  );
}
