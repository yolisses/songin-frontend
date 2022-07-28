import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/api';
import { Music } from '../music/Music';
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

  return (
    <div>
      <h1>Home page</h1>
      <div className="flex flex-col">
        <Link to="/config">go to config</Link>
        <Link to="/player">go to player</Link>
      </div>
      {musics && <MusicCarrousel musics={musics} title="Você vai gostar" />}
    </div>
  );
}
