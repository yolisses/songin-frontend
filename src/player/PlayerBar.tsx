import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { PlayerRange } from './PlayerRange';

export function PlayerBar() {
  return (
    <div className="h-16 mt-2">
      <div className="fixed w-screen bottom-0 z-10">
        <div className="transform translate-y-1/2">
          <PlayerRange />
        </div>
        <div className="flex flex-row items-center text-xl p-1 gap-4 h-16  bg-red-500">
          <button type="button" className="p-2 rounded-full ">
            <FaStepBackward />
          </button>
          <button type="button" className="p-2 rounded-full text-3xl">
            <FaPlay />
          </button>
          <button type="button" className="p-2 rounded-full ">
            <FaStepForward />
          </button>
        </div>
      </div>
    </div>
  );
}
