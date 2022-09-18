import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { User } from './User';
import { api } from '../api/api';
import { ChildrenProps } from '../common/ChildrenProps';

interface UserContext{
    user?:User
    logout:()=>void
    loading:boolean
    signIn:(credential:string)=>Promise<void>
}

const userContext = createContext({} as UserContext);

export function UserContextProvider({ children }:ChildrenProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  async function getMe() {
    setLoading(true);
    try {
      const res = await api.get('users/me');
      setUser(res.data);
    } catch (err) {
      setUser(undefined);
    }
    setLoading(false);
  }

  async function signIn(credential:string) {
    const res = await api.post('/sign-in', credential);
    const user:User = res.data;
    setUser(user);
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
      signIn,
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
