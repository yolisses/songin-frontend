import {
  createContext, Dispatch, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { api } from '../api/api';
import { ChildrenProps } from '../common/ChildrenProps';
import { Music } from './Music';

interface MusicsContext{
    musics?:Music[]
    setMusics:Dispatch<SetStateAction<Music[]|undefined>>
}

const musicsContext = createContext({} as MusicsContext);

export function MusicsContextProvider({ children }:ChildrenProps) {
  const [musics, setMusics] = useState<Music[]>();

  async function getMusics() {
    const res = await api.get('/musics');
    setMusics(res.data);
  }

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <musicsContext.Provider value={{ musics, setMusics }}>
      {children}
    </musicsContext.Provider>
  );
}

export function useMusics() {
  return useContext(musicsContext);
}
