import { randomInt } from './randomInt';

export function randomColor() {
  const h = randomInt(0, 360);
  const s = randomInt(50, 60);
  const l = randomInt(70, 80);
  return `hsl(${h},${s}%,${l}%)`;
}
