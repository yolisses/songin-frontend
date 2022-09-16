/* eslint-disable jsx-a11y/media-has-caption */
import {
  createContext, Dispatch, SetStateAction,
  SyntheticEvent, useContext, useEffect, useRef, useState,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';
import { useMusics } from '../music/MusicsContext';
import { audio as audioFromMusic } from '../music/audio';

interface PlayerContext{
    elapsed :number
    duration:number
    isPlaying:boolean
    changeElapsed:(value:number)=>void
    setDuration:Dispatch<SetStateAction<number>>
    setIsPlaying:Dispatch<SetStateAction<boolean>>
}

const playerContext = createContext({} as PlayerContext);

export function PlayerContextProvider({ children }:ChildrenProps) {
  const { music } = useMusics();
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>();

  function updateTime(e:SyntheticEvent<HTMLAudioElement, Event>) {
    setElapsed(e.currentTarget.currentTime);
    setDuration(e.currentTarget.duration);
  }
  function handlePlay() { setIsPlaying(true); }

  function handlePause() { setIsPlaying(false); }

  function changeElapsed(value:number) {
    if (audio.current) {
      audio.current.currentTime = value;
    }
    setElapsed(value);
  }

  function handleKeyDown(this:any, e: globalThis.KeyboardEvent) {
    const isSpace = e.key === ' ' || e.code === 'Space';
    if (isSpace && e.target === this) {
      setIsPlaying((old) => !old);
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(
    () => {
      if (audio.current) {
        if (isPlaying) audio.current.play();
        else audio.current.pause();
      }
    },
    [audio, isPlaying],
  );

  useEffect(() => {
    if (audio.current) {
      audio.current.load();
      audio.current.play();
    }
    changeElapsed(0);
  }, [music]);

  return (
    <playerContext.Provider value={{
      elapsed,
      duration,
      isPlaying,
      setDuration,
      setIsPlaying,
      changeElapsed,
    }}
    >
      <>
        <audio
          controls={false}
          ref={audio as any}
          onPlay={handlePlay}
          onPause={handlePause}
          onTimeUpdate={updateTime}
        >
          <source src={music
            ? audioFromMusic(music)
            : ''}
          />
        </audio>
        {children}
      </>
    </playerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(playerContext);
}
