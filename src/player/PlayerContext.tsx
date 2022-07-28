import {
  createContext, Dispatch, SetStateAction, useContext, useState,
} from 'react';
import { Music } from '../music/Music';
import { ChildrenProps } from '../common/ChildrenProps';

interface PlayerContext{
    music:Music
    setMusic:Dispatch<SetStateAction<Music>>
}

const playerContext = createContext({} as PlayerContext);

export function PlayerContextProvider({ children }:ChildrenProps) {
  const [music, setMusic] = useState({} as Music);

  return (
    <playerContext.Provider value={{
      music,
      setMusic,
    }}
    >
      {children}
    </playerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(playerContext);
}
