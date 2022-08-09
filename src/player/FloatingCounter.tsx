import { ReactNode } from 'react';
import { displayNumber } from '../utils/displayNumber';

interface FloatingCounterProps{
    count?:number
    children:ReactNode
}

export function FloatingCounter({ children, count }:FloatingCounterProps) {
  return (
    <div className="relative">
      {count && (
      <div className="absolute -top-3 left-5 text-xs">
        {displayNumber(count, 2)}
      </div>
      )}
      {children}
    </div>
  );
}
