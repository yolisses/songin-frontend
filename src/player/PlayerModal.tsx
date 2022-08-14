import { useMusics } from '../music/MusicsContext';
import { NextMusics } from './NextMusics';

export function PlayerModal() {
  const { music } = useMusics();

  if (!music) return null;

  return (
    <div className="flex flex-row overflow-y-hidden h-screen text-white">
      {/* <GradientBackground /> */}
      <div className="absolute -z-10 w-screen h-screen overflow-hidden bg-[#1b1c29]">
        <div
          className="w-screen h-screen brightness-50 bg-center bg-no-repeat bg-cover blur-[100px] scale-[2] overflow-hidden"
          style={{ backgroundImage: `url("${music.image}")` }}
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-10">
        <img
          alt={music.name}
          src={music.image}
          className="aspect-square w-full max-w-[450px]"
        />
      </div>
      <div className="mb-20 overflow-auto flex-1 max-w-md">
        <NextMusics />
      </div>
    </div>
  );
}
