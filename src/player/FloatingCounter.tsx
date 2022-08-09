import { ReactNode } from 'react';

interface FloatingCounterProps{
    count:number
    children:ReactNode
}

export function FloatingCounter({ children, count }:FloatingCounterProps) {
  return (
    <div className="relative">
      <div className="absolute -top-3 left-5 text-xs">
        {count}
      </div>
      {children}
    </div>
  );
}
