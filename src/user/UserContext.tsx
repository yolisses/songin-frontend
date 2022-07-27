import {
  createContext, Dispatch, SetStateAction, useContext, useState,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';
import { User } from './User';

interface UserContext{
    user:User
    setUser:Dispatch<SetStateAction<User>>
}

const userContext = createContext({} as UserContext);

export function UserContextProvider({ children }:ChildrenProps) {
  const [user, setUser] = useState({} as User);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  return useContext(userContext);
}
