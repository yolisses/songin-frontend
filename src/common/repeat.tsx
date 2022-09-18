import { Fragment, ReactNode } from 'react';
import { range } from './range';

export function repeat(Node:ReactNode, times:number) {
  return (
    <>
      {range(times).map((key) => (
        <Fragment key={key}>
          {Node}
        </Fragment>
      ))}
    </>
  );
}
