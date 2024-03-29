/* eslint-disable no-use-before-define */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { api } from '../common/api';
import { ChildrenProps } from '../common/ChildrenProps';
import { useUser } from '../user/UserContext';
import { Music } from './Music';

interface MusicsContext{
  music?:Music
  musics?:Music[]
  setMusic:(music: Music) => void
  jumpMusic:(foward?:boolean)=>void
}

const musicsContext = createContext({} as MusicsContext);

export function MusicsContextProvider({ children }:ChildrenProps) {
  const { loading: loadingUser, user } = useUser();
  const [index, setIndex] = useState(0);
  const [nextMusics, setNextMusics] = useState<Music[]>([]);
  const [selectedMusics, setSelectedMusics] = useState<Music[]>([]);
  const musics = removeDuplicates([...selectedMusics, ...nextMusics]);
  const music = musics[index];

  async function getMusics() {
    const res = await api.get('/musics/feed');
    setNextMusics(res.data);
  }

  function setMusic(music:Music) {
    setIndex(0);
    setSelectedMusics([music]);
  }

  function removeDuplicates(values:Music[]) {
    const table:{[key:number]:boolean} = {};
    const result:Music[] = [];
    values.forEach((music) => {
      const { id } = music;
      if (!table[id]) {
        table[id] = true;
        result.push(music);
      }
    });
    return result;
  }

  useEffect(() => {
    if (!loadingUser) {
      getMusics();
    }
  }, [loadingUser, user]);

  function jumpMusic(foward = true) {
    const offset = foward ? 1 : -1;
    setIndex((value) => {
      const { length } = musics;
      let newValue = value + offset;
      newValue += length;
      newValue = Math.max(newValue, 0);
      newValue %= musics.length;
      return newValue;
    });
  }

  return (
    <musicsContext.Provider value={{
      music,
      musics,
      setMusic,
      jumpMusic,
    }}
    >
      {children}
    </musicsContext.Provider>
  );
}

export function useMusics() {
  return useContext(musicsContext);
}
