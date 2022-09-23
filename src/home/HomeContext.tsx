import { createContext, useContext, useState } from 'react';
import { api } from '../common/api';
import { ChildrenProps } from '../common/ChildrenProps';
import { Group } from '../group/Group';

interface HomeContext{
    error:boolean
    groups?:Group[]
    loading:boolean
    getGroups:()=>void
    refreshGroups:()=>void
}

const homeContext = createContext({} as HomeContext);

export function HomeContextProvider({ children }:ChildrenProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>();

  async function getGroups() {
    setError(false);
    setLoading(true);
    try {
      const res = await api.get('/groups/recommend');
      setGroups(res.data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }

  function refreshGroups() {
    if (window.location.pathname === '/') {
      getGroups();
    }
  }

  return (
    <homeContext.Provider value={{
      error,
      groups,
      loading,
      getGroups,
      refreshGroups,
    }}
    >
      {children}
    </homeContext.Provider>
  );
}

export function useHome() {
  return useContext(homeContext);
}
