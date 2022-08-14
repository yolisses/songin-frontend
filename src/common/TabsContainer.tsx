/* eslint-disable react/jsx-no-useless-fragment */
import { ReactNode } from 'react';

interface TabsContainerProps{
    children:ReactNode[]
    selected:number
}

export function TabsContainer({ children, selected }:TabsContainerProps) {
  return (
    <>
      {children[selected || 0]}
    </>
  );
}
