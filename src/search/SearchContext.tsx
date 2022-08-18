import { createContext, useState } from 'react';
import { ChildrenProps } from '../common/ChildrenProps';

interface SearchContext{
    history?:string[]
    addToHistory:(text:string)=>void
}

const searchContext = createContext({} as SearchContext);

export function SearchContextProvider({ children }:ChildrenProps) {
  const [history, setHistory] = useState();

  function addToHistory(text:string) {
    //
  }

  return (
    <searchContext.Provider value={{ addToHistory }}>
      {children}
    </searchContext.Provider>
  );
}
