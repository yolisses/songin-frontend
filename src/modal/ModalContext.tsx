/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';
import { ModalOverflow } from './ModalOverflow';

interface ModalContext{
    modal?:ReactNode
    setModal:Dispatch<SetStateAction<ReactNode|undefined>>
}

const modalContext = createContext({} as ModalContext);

export function ModalContextProvider({ children }:ChildrenProps) {
  const [modal, setModal] = useState<ReactNode>();

  return (
    <modalContext.Provider value={{ modal, setModal }}>
      {modal && (
      <ModalOverflow setModal={setModal}>
        {modal}
      </ModalOverflow>
      )}
      {children}
    </modalContext.Provider>
  );
}

export function useModal() {
  return useContext(modalContext);
}
