import {
  createContext, Dispatch, SetStateAction, useContext, useState,
} from 'react';
import { Music } from './Music';
import { ChildrenProps } from '../common/ChildrenProps';

  interface MusicContext{
      music:Music
      setMusic:Dispatch<SetStateAction<Music>>
  }

const musicContext = createContext({} as MusicContext);

export function MusicContextProvider({ children }:ChildrenProps) {
  const [music, setMusic] = useState({} as Music);

  return (
    <musicContext.Provider value={{
      music,
      setMusic,
    }}
    >
      {children}
    </musicContext.Provider>
  );
}

export function useMusic() {
  return useContext(musicContext);
}
