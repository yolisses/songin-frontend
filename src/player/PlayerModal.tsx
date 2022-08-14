import { Music } from '../music/Music';
import { NextMusics } from './NextMusics';

interface PlayerModalProps{
    music:Music
}

export function PlayerModal({ music }:PlayerModalProps) {
  return (
    <div className="bg-red-500 -z-10 fixed top-0 w-screen h-screen flex">
      <div className="flex flex-row">
        <img
          alt={music.name}
          src={music.image}
          className="h-full aspect-square p-24"
        />
        <NextMusics />
      </div>
    </div>
  );
}
