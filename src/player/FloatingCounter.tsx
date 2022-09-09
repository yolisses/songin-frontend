import { ReactNode } from 'react';
import { displayNumber } from '../utils/displayNumber';

interface FloatingCounterProps{
    count?:number
    children:ReactNode
}

export function FloatingCounter({ children, count }:FloatingCounterProps) {
  return (
    <div className="relative">
      {!!count && (
      <div className="absolute -top-2 left-6 text-xs">
        {displayNumber(count, 1)}
      </div>
      )}
      {children}
    </div>
  );
}
