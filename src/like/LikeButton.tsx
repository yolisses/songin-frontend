import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Music } from '../music/Music';
import { FloatingCounter } from '../player/FloatingCounter';

interface LikeButtonProps{
  music:Music
  alreadyLiked:boolean
}

export function LikeButton({ music, alreadyLiked }:LikeButtonProps) {
  const [active, setActive] = useState(alreadyLiked);
  const [animate, setAnimate] = useState(false);
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
    <FloatingCounter count={music.likesCount + add}>
      <button
        onClick={handleClick}
        className="group relative"
      >
        <FaHeart
          size={iconsSize}
          className="group-active:scale-50 transition absolute focus:outline-none animate-explode select-none pointer-events-none"
          style={{
            color: 'red',
            opacity: animate ? '100%' : '0',
            animationName: animate ? undefined : 'animate-explode',
          }}
        />
        <FaHeart
          size={iconsSize}
          className="group-active:scale-50 transition"
          style={{ color: active ? 'red' : undefined }}
        />
      </button>
    </FloatingCounter>
  );
}
