import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Music } from '../music/Music';
import { FloatingCounter } from '../player/FloatingCounter';

interface LikeButtonProps{
  music?:Music
  alreadyLiked:boolean
}

export function LikeButton({ music, alreadyLiked }:LikeButtonProps) {
  const [animate, setAnimate] = useState(false);
  const [active, setActive] = useState(alreadyLiked);

  let add = 0;
  if (alreadyLiked && !active) {
    add = -1;
  }
  if (!alreadyLiked && active) {
    add = 1;
  }

  function handleClick() {
    setActive((old) => {
      setAnimate(!old);
      return !old;
    });
  }

  useEffect(() => {
    setActive(alreadyLiked);
  }, [alreadyLiked]);

  const iconsSize = 24;
  return (
    <FloatingCounter count={music && (music.likesCount + add)}>
      <button
        onClick={handleClick}
        className="group relative p-2"
      >
        <FaHeart
          size={iconsSize}
          className="group-active:scale-50 transition-transform absolute focus:outline-none animate-explode select-none pointer-events-none"
          style={{
            color: 'red',
            opacity: animate ? '100%' : '0',
            animationName: animate ? undefined : 'animate-explode',
          }}
        />
        <FaHeart
          size={iconsSize}
          className="group-active:scale-50 transition-transform"
          style={{ color: active ? 'red' : undefined }}
        />
      </button>
    </FloatingCounter>
  );
}
