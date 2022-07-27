import { createContext, useContext } from 'react';
import { ChildrenProps } from '../common/ChildrenProps';
import { User } from './User';

interface UserContext{
    user:User
}

const userContext = createContext({} as UserContext);

export function UserContextProvider({ children }:ChildrenProps) {
  return (
    <userContext.Provider value={{} as UserContext}>
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  return useContext(userContext);
}
