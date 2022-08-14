/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import {
  FaPlay, FaRedo, FaStepBackward, FaStepForward,
} from 'react-icons/fa';
import { LikeButton } from '../like/LikeButton';
import { useMusics } from '../music/MusicsContext';
import { useMd } from '../responsive/useMd';
import { PlayerModal } from './PlayerModal';
import { PlayerRange } from './PlayerRange';

export function PlayerBar() {
  const md = useMd();
  const { music } = useMusics();
  const [modalActive, setModalActive] = useState(false);
  if (!md || !music) return null;

  function handleClick() {
    setModalActive((value) => !value);
  }

  return (
    <div className="h-16 mt-2">
      {modalActive && (
      <div className="fixed bottom-0 w-screen h-screen bg-white animate-appear">
        <PlayerModal />
      </div>
      )}
      <div className="fixed bottom-[3.3rem] w-full z-[11]">
        <PlayerRange />
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="fixed w-full z-10 bottom-0 h-16 bg-white flex flex-row justify-between items-center"
      >
        <div className="flex flex-row items-center text-lg p-1 gap-4 ">
          <button type="button" className="p-2 rounded-full ">
            <FaStepBackward />
          </button>
          <button type="button" className="p-2 rounded-full text-2xl">
            <FaPlay />
          </button>
          <button type="button" className="p-2 rounded-full ">
            <FaStepForward />
          </button>
        </div>
        <div className="flex flex-row gap-2 max-w-md w-full mr-28 ">
          <img
            alt={music.name}
            src={music.image}
            className="aspect-square h-14 rounded"
          />
          <div>
            <div className="font-semibold">
              {music.name}
            </div>
            <div>
              {music.artist.name}
            </div>
          </div>
          <div className="flex flex-row items-center ml-auto">
            <LikeButton music={music} />
          </div>
        </div>
        <div className="text-lg">
          <button type="button" className="p-2 rounded-full">
            <FaRedo />
          </button>
        </div>
      </button>
    </div>
  );
}
