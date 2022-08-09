import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export function LikeButton() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((old) => !old);
  }

  const iconsSize = 24;
  return (
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
        className="group-active:scale-50 transition"
        size={iconsSize}
        style={{ color: active ? 'red' : undefined }}
      />
    </button>
  );
}
