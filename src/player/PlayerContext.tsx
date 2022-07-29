import {
  createContext, Dispatch, SetStateAction, SyntheticEvent, useContext, useRef, useState,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';

interface PlayerContext{
    elapsed :number
    duration:number
    play:()=>void
    pause:()=>void
    isPlaying:boolean
    setElapsed:Dispatch<SetStateAction<number>>
    setDuration:Dispatch<SetStateAction<number>>
}

const playerContext = createContext({} as PlayerContext);

export function PlayerContextProvider({ children }:ChildrenProps) {
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>();

  function updateTime(e:SyntheticEvent<HTMLAudioElement, Event>) {
    setElapsed(e.currentTarget.currentTime);
    setDuration(e.currentTarget.duration);
  }

  function pause() {
    if (audio.current) { audio.current.pause(); }
  }

  function play() {
    if (audio.current) { audio.current.play(); }
  }

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  return (
    <playerContext.Provider value={{
      play,
      pause,
      elapsed,
      duration,
      isPlaying,
      setElapsed,
      setDuration,
    }}
    >
      <>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio
          controls={false}
          ref={audio as any}
          onPlay={handlePlay}
          onPause={handlePause}
          onTimeUpdate={updateTime}
        >
          <source src="offline.mp3" />
        </audio>
        {children}
      </>
    </playerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(playerContext);
}
