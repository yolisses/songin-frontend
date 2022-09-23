import {
  Dispatch, SetStateAction, useEffect, useRef, useState,
} from 'react';
import './PlayerCard.css';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';
import { Music } from '../../music/Music';
import { image } from '../../common/image';
import { PlayerRange } from '../PlayerRange';
import { ShareBallon } from '../../share/ShareBallon';
import { FloatingCounter } from '../FloatingCounter';
import { LikeButton } from '../../like/LikeButton';
import { ShareButton } from '../../share/ShareButton';

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
        style={{ backgroundImage: `url("${image(music, 512)}")` }}
      />
      <img
        src={image(music, 512)}
        alt={music.name}
        className="gradient-mask absolute -z-30 w-screen aspect-square max-w-[100vh]
-translate-y-1/2 top-1/2 translate-x-1/2 right-1/2 bg-transparent"
      />
      <div
        className="bottom-0 absolute w-screen"
      >
        <div className="px-4 flex flex-col gap-4">
          <div className="flex flex-col pb-2">
            <div className="text-xl">
              {music.name}
            </div>
            <Link to={`/@${music.artist?.name}`} className="">
              {music.artist?.name}
            </Link>
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
          <div className="flex flex-row gap-4">
            <LikeButton music={music} />
            <FloatingCounter count={130}>
              <button className="p-2">
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
