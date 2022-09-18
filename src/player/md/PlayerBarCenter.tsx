/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-bind */
import { MouseEvent, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { image } from '../../common/image';
import { LikeButton } from '../../like/LikeButton';
import { Music } from '../../music/Music';
import { ShareBallon } from '../../share/ShareBallon';
import { ShareButton } from '../../share/ShareButton';

interface Props{
    music:Music
    modalActive:boolean
}

export function PlayerBarCenter({ music, modalActive }:Props) {
  const [share, setShare] = useState(false);

  function closeShare() {
    setShare(false);
  }

  function stopPropagation(e:MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div className="flex flex-row gap-2 max-w-md w-full items-center">
      <div className="aspect-square h-14 relative flex center">
        <FaChevronDown className="absolute w-full h-full p-[1.1rem] -z-10" />
        <img
          alt={music.name}
          src={image(music, 64)}
          className="rounded transition-all aspect-square w-12 duration-[0.4s]"
          style={{
            scale: modalActive ? 0 : undefined,
            opacity: modalActive ? 0 : undefined,
          }}
        />
      </div>
      <div className="flex flex-col items-start">
        <div className="font-semibold">
          {music.name}
        </div>
        {music.artist
        && (
        <Link
          to={`/@${music.artist?.nick}`}
          className="text-sm hover:underline"
        >
          {music.artist?.name}
        </Link>
        )}
      </div>
      <div
        onClick={stopPropagation}
        className="flex flex-row items-center h-14 ml-auto px-2 cursor-default"
      >
        <div className="flex flex-row gap-4">
          <LikeButton music={music} alreadyLiked={music.liked} />
          <div className="relative">
            {share && (
            <div className="absolute overflow-hidden bottom-[4rem] -right-[4.5rem]">
              <ShareBallon
                music={music}
                close={closeShare}
              />
            </div>
            )}
            <ShareButton setShare={setShare} />
          </div>
        </div>
      </div>
    </div>
  );
}
