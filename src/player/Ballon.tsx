import { ReactNode } from 'react';

interface BallonProps{
    children:ReactNode
}

export function Ballon({ children }:BallonProps) {
  return (
    <div className="flex flex-col items-start animate-slide-up">
      <div className="bg-white bg-opacity-50 rounded-full flex flex-row gap-1 items-center p-1 backdrop-blur-lg">
        {children}
      </div>
      <div
        className="w-0 h-0 border-solid ml-[7.25rem]  backdrop-blur-lg"
        style={{
          borderWidth: '0.5rem 0.5rem 0 0.5rem',
          borderColor: 'rgba(255,255,255,0.5) transparent transparent transparent',
        }}
      />
    </div>
  );
}
