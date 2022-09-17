/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { api } from '../api/api';
import { CarrouselItem } from '../home/CarrouselItem';
import { Music } from '../music/Music';
import { SearchInput } from './SearchInput';

export function SearchPage() {
  const [musics, setMusics] = useState<Music[]|undefined>([]);
  const [error, setError] = useState(false);

  async function getMusics(q:string) {
    try {
      setError(false);
      const res = await api.get('/musics/search', {
        params: { q },
      });
      setMusics(res.data);
    } catch {
      setError(true);
    }
  }

  return (
    <div className="w-full flex flex-col items-center p-6">
      <SearchInput getMusics={getMusics} />

      {error
        ? (
          <div className="warn">
            Something gone wrong searching musics
          </div>
        )
        : musics?.map((music) => <CarrouselItem music={music} />)}
    </div>
  );
}
