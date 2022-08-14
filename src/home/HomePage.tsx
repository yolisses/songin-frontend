import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/api';
import { range } from '../dev/utils/range';
import { Music } from '../music/Music';
import { Nav } from '../nav/Nav';
import { MusicCarrousel } from './MusicCarrousel';

export function HomePage() {
  const [musics, setMusics] = useState<Music[]>();

  async function getMusics() {
    const res = await api.get('/musics');
    setMusics(res.data);
  }

  useEffect(() => {
    getMusics();
  }, []);

  const repeat = range(10);

  return (
    <div className="flex flex-col gap-10">
      {musics && repeat.map(
        (value) => <MusicCarrousel musics={musics} title="Você vai gostar" />,
      )}
      <Nav />
    </div>
  );
}
