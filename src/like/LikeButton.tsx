import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Music } from '../music/Music';
import { FloatingCounter } from '../player/FloatingCounter';

interface LikeButtonProps{
  music:Music
}

export function LikeButton({ music }:LikeButtonProps) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((old) => !old);
  }

  const iconsSize = 24;
  return (
    <FloatingCounter count={music?.likesCount}>
      <button
        type="button"
        onClick={handleClick}
        className="group relative"
      >
        <FaHeart
          size={iconsSize}
          className="group-active:scale-50 transition absolute outline-none animate-explode select-none pointer-events-none"
          style={{
            color: 'red',
            animationName: active ? undefined : 'animate-explode',
            opacity: active ? '100%' : '0',
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
