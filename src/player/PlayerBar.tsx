/* eslint-disable react/jsx-no-useless-fragment */
import {
  FaPlay, FaRedo, FaStepBackward, FaStepForward,
} from 'react-icons/fa';
import { LikeButton } from '../like/LikeButton';
import { useMusic } from '../music/MusicContext';
import { useMd } from '../responsive/useMd';
import { PlayerRange } from './PlayerRange';

export function PlayerBar() {
  const md = useMd();
  const { music } = useMusic();
  if (!md || !music) return null;

  return (
    <div className="h-16 mt-2">
      <div className="fixed w-full bottom-0 pt-1 z-10 h-16 bg-red-500 flex flex-row justify-between items-center">
        <div className="absolute -top-2.5 w-full">
          <PlayerRange />
        </div>
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
        <div className="flex flex-row gap-2 max-w-md w-full bg-blue-500 mr-28 ">
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
          <div className="flex flex-row items-center">
            <LikeButton music={music} />
          </div>
        </div>
        <div className="text-lg">
          <button type="button" className="p-2 rounded-full">
            <FaRedo />
          </button>
        </div>
      </div>
    </div>
  );
}
