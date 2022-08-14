import { useState } from 'react';
import { FaComment, FaShare } from 'react-icons/fa';
import { Ballon } from './Ballon';
import { Music } from '../music/Music';
import { PlayerRange } from './PlayerRange';
import { LikeButton } from '../like/LikeButton';
import { FloatingCounter } from './FloatingCounter';
import { ShareButtons } from '../share/ShareButtons';

interface PlayerCardProps{
    music:Music
}

export function PlayerCard({ music }:PlayerCardProps) {
  const [share, setShare] = useState(false);
  const iconsSize = 24;

  function handleShareClick() {
    setShare((value) => !value);
  }

  return (
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
            {share && (
            <Ballon>
              <ShareButtons
                size={40}
                url={`https://musiks.com/music/${music.id}`}
              />
            </Ballon>
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
              <button
                type="button"
                onClick={handleShareClick}
                className="active:scale-50 transition"
              >
                <FaShare size={iconsSize} />
              </button>
            </FloatingCounter>
          </div>
          <PlayerRange />
        </div>
        <div className="h-16" />
      </div>
    </div>
  );
}
