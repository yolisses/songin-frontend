import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';

interface ModalContext{
    modal?:ReactNode
    setModal:Dispatch<SetStateAction<ReactNode|undefined>>
}

const modalContext = createContext({} as ModalContext);

export function ModalContextProvider({ children }:ChildrenProps) {
  const [modal, setModal] = useState<ReactNode>();

  return (
    <modalContext.Provider value={{ modal, setModal }}>
      {modal}
      {children}
    </modalContext.Provider>
  );
}

export function useModal() {
  return useContext(modalContext);
}
