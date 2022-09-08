import {
  createContext, Dispatch, SetStateAction, useContext, useState,
} from 'react';
import { User } from './User';
import { api } from '../api/api';
import { ChildrenProps } from '../common/ChildrenProps';

interface UserContext{
    user?:User
    logout:()=>void
    setUser:Dispatch<SetStateAction<User|undefined>>
}

const userContext = createContext({} as UserContext);

export function UserContextProvider({ children }:ChildrenProps) {
  const [user, setUser] = useState<User>();

  async function logout() {
    await api.post('/log-out');
    setUser(undefined);
  }

  return (
    <userContext.Provider value={{ user, setUser, logout }}>
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  return useContext(userContext);
}
