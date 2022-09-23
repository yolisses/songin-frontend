import { useEffect, useState } from 'react';
import { Music } from '../music/Music';
import { LikeButtonContent } from './LikeButtonContent';
import { FloatingCounter } from '../player/FloatingCounter';

interface LikeButtonProps{
  music?:Music
  alreadyLiked:boolean
}

export function LikeButton({ music, alreadyLiked }:LikeButtonProps) {
  const [animate, setAnimate] = useState(false);
  const [active, setActive] = useState(alreadyLiked);

  function handleClick() {
    setActive((old) => {
      setAnimate(!old);
      return !old;
    });
  }

  useEffect(() => {
    setActive(alreadyLiked);
  }, [alreadyLiked]);

  return (
    <FloatingCounter
      count={music?.likesCount}
    >
      <button
        onClick={handleClick}
        className="group relative p-2"
      >
        <LikeButtonContent
          active={active}
          animate={animate}
        />
      </button>
    </FloatingCounter>
  );
}
