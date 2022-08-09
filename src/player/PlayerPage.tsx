import { useEffect, useState } from 'react';
import { Nav } from '../nav/Nav';
import { api } from '../api/api';
import { Music } from '../music/Music';
import { PlayerCard } from './PlayerCard';
import { GradientBackground } from './GradientBackground';

export function PlayerPage() {
  const [musics, setMusics] = useState<Music[]>();

  async function getMusics() {
    const res = await api.get('/musics');
    setMusics(res.data);
  }

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <>
      <GradientBackground />
      <div className="flex flex-col h-screen py-20 overflow-y-scroll no-scrollbar snap-y snap-mandatory text-white">
        {musics && musics.map((music) => (
          <PlayerCard music={music} />
        ))}
      </div>
      <div className="absolute bottom-0 -z-10 w-screen h-60 bg-gradient-to-t from-[#000d] via-[#000a] to-transparent" />
      <div className="absolute bottom-0 text-white ">
        <Nav white={false} />
      </div>
    </>
  );
}
