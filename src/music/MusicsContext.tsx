import {
  createContext, Dispatch, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';
import { ChildrenProps } from '../common/ChildrenProps';
import { Music } from './Music';

interface MusicsContext{
  music?:Music
  musics?:Music[]
  setMusic:Dispatch<SetStateAction<Music|undefined>>
  setMusics:Dispatch<SetStateAction<Music[]|undefined>>
}

const musicsContext = createContext({} as MusicsContext);

export function MusicsContextProvider({ children }:ChildrenProps) {
  const [musics, setMusics] = useState<Music[]>();
  const [music, setMusic] = useState<Music>();

  async function getMusics() {
    const res = await api.get('/musics?_expand=artist');
    setMusics(res.data);
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
