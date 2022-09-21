import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { User } from './User';
import { api } from '../api/api';
import { ChildrenProps } from '../common/ChildrenProps';

interface UserContext{
    user:User
    logout:()=>void
    loading:boolean
    signIn:(credential:string)=>Promise<void>
}

const userContext = createContext({} as UserContext);

export function UserContextProvider({ children }:ChildrenProps) {
  const [user, setUser] = useState({} as User);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function signInMark() {
    try {
      const res = await api.post('/mark/sign-in', 'teste2');
      setUser(res.data);
      setLoading(false);
    } catch (e:any) {
      setError(true);
    }
  }

  async function getMe() {
    setLoading(true);
    try {
      const res = await api.get('/users/me');
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      signInMark();
    }
  }

  async function signIn(credential:string) {
    const res = await api.post('/sign-in', credential);
    const user:User = res.data;
    setUser(user);
  }

  async function logout() {
    await api.post('/log-out');
    getMe();
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
