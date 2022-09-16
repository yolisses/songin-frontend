/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { Nav } from '../nav/Nav';
import { PlayerCard } from './PlayerCard';
import { useMusics } from '../music/MusicsContext';
import { GradientBackground } from './GradientBackground';
import { Music } from '../music/Music';

export function PlayerPage() {
  const { musics } = useMusics();
  const [newMusic, setNewMusic] = useState<Music>();

  return (
    <>
      <GradientBackground />
      <div className="flex flex-col h-screen py-20 overflow-y-scroll no-scrollbar snap-y snap-mandatory text-white">
        {musics && musics.map((music) => (
          <PlayerCard music={music} setNewMusic={setNewMusic} />
        ))}
      </div>
      <div className="absolute bottom-0 -z-10 w-screen h-60 bg-gradient-to-t from-[#000d] via-[#000a] to-transparent" />
    </>
  );
}
