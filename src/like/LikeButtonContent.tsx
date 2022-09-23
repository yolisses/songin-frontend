import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

interface Props{
    active:boolean
}

export function LikeButtonContent({ active }:Props) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate((old) => !old);
  }, [active]);

  const iconsSize = 24;
  return (
    <div>
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
    </div>
  );
}
