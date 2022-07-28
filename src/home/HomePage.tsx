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
      <Link to="/config">go to config</Link>
      {musics && <MusicCarrousel musics={musics} title="Você vai gostar" />}
    </div>
  );
}
