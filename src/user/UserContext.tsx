import {
  createContext, Dispatch, SetStateAction, useContext, useState,
} from 'react';
import { User } from './User';
import { ChildrenProps } from '../common/ChildrenProps';
import { api } from '../api/api';

interface UserContext{
    user:User
    logout:()=>void
    setUser:Dispatch<SetStateAction<User>>
}

const userContext = createContext({} as UserContext);

export function UserContextProvider({ children }:ChildrenProps) {
  const [user, setUser] = useState(null as any as User);

  async function logout() {
    await api.post('/log-out');
    setUser(null as any);
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
