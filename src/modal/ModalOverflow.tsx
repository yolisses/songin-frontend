/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Modal.css';
import { ReactNode, useEffect } from 'react';
import { useModal } from './ModalContext';

interface ModalOverflowProps{
    children:ReactNode
}

export function ModalOverflow({ children }:ModalOverflowProps) {
  const { close } = useModal();

  function setBodyScroll(value :string) {
    const body = document.querySelector('body');
        body!.style.overflow = value;
  }

  useEffect(() => {
    setBodyScroll('hidden');
    return () => {
      setBodyScroll('unset');
    };
  }, []);

  return (
    <div
      onClick={close}
      style={{
        animation: 'modal-overlay-appear',
        animationDuration: '0.1s',
      }}
      className="flex center expand fixed bg-black bg-opacity-70 z-[100]"
    >
      {children}
    </div>
  );
}
