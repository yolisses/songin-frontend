import {
  createContext, Dispatch, SetStateAction, useContext, useEffect, useState,
} from 'react';
import { User } from './User';
import { api } from '../api/api';
import { ChildrenProps } from '../common/ChildrenProps';

interface UserContext{
    user?:User
    logout:()=>void
    loading:boolean
    setUser:Dispatch<SetStateAction<User|undefined>>
}

const userContext = createContext({} as UserContext);

export function UserContextProvider({ children }:ChildrenProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  async function getMe() {
    try {
      const res = await api.get('users/me');
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      setUser(undefined);
    }
    setLoading(false);
  }

  async function logout() {
    await api.post('/log-out');
    setUser(undefined);
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <userContext.Provider value={{
      user,
      logout,
      setUser,
      loading,
    }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  return useContext(userContext);
}
