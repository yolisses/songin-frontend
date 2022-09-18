/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useEffect } from 'react';
import { stopPropagation } from '../utils/stopPropagation';

interface BallonProps{
    children:ReactNode
    close:()=>void
}

export function Ballon({ children, close }:BallonProps) {
  function handleMouseUp() {
    close();
  }

  useEffect(() => {
    window.addEventListener('click', handleMouseUp);
    return () => {
      window.removeEventListener('click', handleMouseUp);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-start animate-slide-up"
    >
      <div
        onMouseUp={stopPropagation}
        className="bg-white bg-opacity-50 rounded-full flex flex-row gap-1 items-center p-1 backdrop-blur-lg"
      >
        {children}
      </div>
      <div
        className="w-0 h-0 border-solid ml-[7.75rem]  backdrop-blur-lg"
        style={{
          borderWidth: '0.5rem 0.5rem 0 0.5rem',
          borderColor: 'rgba(255,255,255,0.5) transparent transparent transparent',
        }}
      />
    </div>
  );
}
