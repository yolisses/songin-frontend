import {
  createContext, Dispatch, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';
import { ChildrenProps } from '../common/ChildrenProps';
import { Music } from './Music';

interface MusicsContext{
  music?:Music
  musics?:Music[]
  setMusic:(music: Music) => void
  setMusics:Dispatch<SetStateAction<Music[]|undefined>>
}

const musicsContext = createContext({} as MusicsContext);

export function MusicsContextProvider({ children }:ChildrenProps) {
  const [musics, setMusics] = useState<Music[]>();
  const [index, setIndex] = useState(0);
  const music = musics ? musics[index] : undefined;

  async function getMusics() {
    const res = await api.get('/musics', {
      params: {
        _expand: 'artist',
      },
    });
    setMusics(res.data);
  }

  // eslint-disable-next-line no-shadow
  function setMusic(music:Music) {
    setIndex(0);
    setMusics([music]);
  }

  useEffect(() => {
    getMusics();
  }, []);

  useEffect(() => {
    if (musics && !music) {
      setMusic(musics[0]);
    }
  }, [musics]);

  return (
    <musicsContext.Provider value={{
      music,
      musics,
      setMusic,
      setMusics,
    }}
    >
      {children}
    </musicsContext.Provider>
  );
}

export function useMusics() {
  return useContext(musicsContext);
}
