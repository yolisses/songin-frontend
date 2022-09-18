/* eslint-disable react/jsx-no-bind */
import { ReactNode, useState } from 'react';
import { api } from '../api/api';
import { repeat } from '../common/repeat';
import { Music } from '../music/Music';
import { NavSpacer } from '../nav/NavSpacer';
import { SearchInput } from './SearchInput';
import { SearchMusicItem } from './SearchMusicItem';

export function SearchPage() {
  const [musics, setMusics] = useState<Music[]|undefined>([]);
  const [error, setError] = useState(false);

  async function getMusics(q:string) {
    try {
      setMusics(undefined);
      setError(false);
      const res = await api.get('/musics/search', {
        params: { q },
      });
      setMusics(res.data);
    } catch {
      setError(true);
    }
  }

  let content:ReactNode;

  if (error) {
    content = (
      <div className="warn">
        Something gone wrong searching musics.
      </div>
    );
  } else if (musics === undefined) {
    content = (
      <>
        {repeat(<SearchMusicItem />, 10)}
      </>
    );
  } else if (musics.length === 0) {
    content = (
      <div className="warn">
        No results to show. Please look for typos.
      </div>
    );
  } else {
    content = (
      <>
        { musics?.map((music) => (
          <SearchMusicItem music={music} />
        ))}
        <NavSpacer />
      </>
    );
  }

  return (
    <div className="flex flex-col items-center p-2 gap-8 md:pr-40 z-0">
      <div className="h-6 w-full relative flex center">
        <div className="fixed top-0 right-0 left-0 md:right-40 md:left-40 bg-zinc-900 flex center z-10 p-2">
          <SearchInput getMusics={getMusics} />
        </div>
      </div>

      <div className="flex flex-col max-w-3xl w-full">
        {content}
      </div>
    </div>
  );
}
