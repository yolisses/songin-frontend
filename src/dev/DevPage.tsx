import { displayNumber } from '../utils/displayNumber';
import { range } from './utils/range';

export function DevPage() {
  return (
    <div>
      <div>{displayNumber(0, 1)}</div>
      <div>{displayNumber(1, 1)}</div>
      <div>{displayNumber(10, 1)}</div>
      <div>{displayNumber(100, 1)}</div>
      <div>{displayNumber(1000, 1)}</div>
      <div>{displayNumber(10000, 1)}</div>
      <div>{displayNumber(100000, 1)}</div>
      <div>{displayNumber(1000000, 1)}</div>
      <div>{displayNumber(10000000, 1)}</div>
      <div>{displayNumber(100000000, 1)}</div>
      <div>{displayNumber(1000000000, 1)}</div>
      <div>{displayNumber(10000000000, 1)}</div>
      <div>{displayNumber(100000000000, 1)}</div>
      <div>{displayNumber(1000000000000, 1)}</div>
    </div>
  );
}
