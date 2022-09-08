/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Modal.css';
import { MouseEvent } from 'react';
import { ChildrenProps } from '../common/ChildrenProps';

export function Modal({ children }:ChildrenProps) {
  function handleClick(e:MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div
      onClick={handleClick}
      className="bg-zinc-800 p-4 rounded-lg"
      style={{
        animation: 'modal-appear',
        animationDuration: '0.2s',
      }}
    >
      {children}
    </div>
  );
}
