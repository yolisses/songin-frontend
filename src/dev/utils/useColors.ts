import { useState } from 'react';
import { randomColor } from './randomColor';
import { range } from './range';

export function useColors(count:number) {
  const colors = range(count).map(randomColor);
  const [savedColors, setColors] = useState(colors);
  return savedColors;
}
