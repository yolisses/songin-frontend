/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { api } from '../api/api';
import { Music } from '../music/Music';
import { SearchInput } from './SearchInput';
import { SearchMusicItem } from './SearchMusicItem';

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
    <div className="w-full flex flex-col items-center p-6 gap-8">
      <SearchInput getMusics={getMusics} />
      {error
        ? (
          <div className="warn">
            Something gone wrong searching musics
          </div>
        )
        : (
          <div className="flex flex-col max-w-3xl w-full">
            { musics?.map((music) => (
              <SearchMusicItem music={music} />
            ))}
          </div>
        )}
    </div>
  );
}
