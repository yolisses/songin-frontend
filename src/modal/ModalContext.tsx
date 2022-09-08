/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';
import { Modal } from './Modal';
import { ModalOverflow } from './ModalOverflow';

interface ModalContext{
  close:()=>void
  content?:ReactNode
  setContent:Dispatch<SetStateAction<ReactNode|undefined>>
}

const modalContext = createContext({} as ModalContext);

export function ModalContextProvider({ children }:ChildrenProps) {
  const [content, setContent] = useState<ReactNode>();

  function close() {
    setContent(undefined);
  }

  return (
    <modalContext.Provider value={{ content, setContent, close }}>
      {content && (
      <ModalOverflow>
        <Modal>
          {content}
        </Modal>
      </ModalOverflow>
      )}
      {children}
    </modalContext.Provider>
  );
}

export function useModal() {
  return useContext(modalContext);
}
