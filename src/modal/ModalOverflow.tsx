/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  Dispatch, ReactNode, SetStateAction, useEffect,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';

interface ModalOverflowProps{
    children:ReactNode
    setModal:Dispatch<SetStateAction<ReactNode>>
}

export function ModalOverflow({ children, setModal }:ModalOverflowProps) {
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

  function handleClick() {
    setModal(undefined);
  }

  return (
    <div
      onClick={handleClick}
      className="flex center top-0 bottom-0 left-0 right-0 fixed bg-black bg-opacity-50 z-[100]"
    >
      {children}
    </div>
  );
}
