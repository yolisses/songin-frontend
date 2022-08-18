/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import {
  FaChevronDown, FaRedo, FaStepBackward, FaStepForward,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LikeButton } from '../like/LikeButton';
import { useMusics } from '../music/MusicsContext';
import { useMd } from '../responsive/useMd';
import { ShareBallon } from '../share/ShareBallon';
import { ShareButton } from '../share/ShareButton';
import { stopPropagation } from '../utils/stopPropagation';
import { PlayButton } from './PlayButton';
import { PlayerModal } from './PlayerModal';
import { PlayerRange } from './PlayerRange';

export function PlayerBar() {
  const md = useMd();
  const { music } = useMusics();
  const [modalActive, setModalActive] = useState(false);
  const [share, setShare] = useState(false);

  function closeShare() {
    setShare(false);
  }

  function closeAndStopPropagation(e:any) {
    setModalActive(false);
    stopPropagation(e);
  }

  if (!md || !music) return null;

  function handleClick() {
    setModalActive((value) => !value);
  }

  return (
    <div className="h-16 mt-2">
      {modalActive && (
      <div className="fixed bottom-0 w-screen h-screen animate-appear">
        <PlayerModal />
      </div>
      )}
      <div className="fixed bottom-[3.3rem] w-full z-[11]">
        <PlayerRange />
      </div>
      <button
        onClick={handleClick}
        style={{
          color: modalActive ? 'white' : undefined,
          backgroundColor: modalActive ? undefined : 'white',
        }}
        className="fixed w-full z-10 bottom-0 h-16 duration-[0.4s] transition-colors flex flex-row justify-between items-center"
      >
        <div
          onClick={stopPropagation}
          className="flex flex-row items-center text-lg p-1 gap-4 "
        >
          <button className="p-2 rounded-full ">
            <FaStepBackward />
          </button>
          <PlayButton />
          <button className="p-2 rounded-full ">
            <FaStepForward />
          </button>
        </div>
        <div className="flex flex-row gap-2 max-w-md w-full mr-28 items-center">
          <div className="aspect-square h-14 relative">
            <FaChevronDown className="absolute w-full h-full p-[1.1rem] -z-10" />
            <img
              alt={music.name}
              src={music.image}
              className="bg-gray-200 rounded transition-all aspect-square duration-[0.4s]"
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
            <Link
              onClick={closeAndStopPropagation}
              to={`/artist/${music.artist?.id}`}
              className="text-sm hover:underline"
            >
              {music.artist?.name}
            </Link>
          </div>
          <div className="flex flex-row items-center ml-auto">
            <div
              onClick={stopPropagation}
              className="flex flex-row gap-6"
            >
              <LikeButton music={music} alreadyLiked={music.liked} />
              <div className="relative">
                {share && (
                  <div className="absolute overflow-hidden bottom-[4rem] -right-[5.5rem]">
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
        <div className="text-lg" onClick={stopPropagation}>
          <button className="p-2 rounded-full">
            <FaRedo />
          </button>
        </div>
      </button>
    </div>
  );
}
