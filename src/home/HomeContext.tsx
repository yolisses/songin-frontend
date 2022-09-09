import { createContext, useContext, useState } from 'react';
import { api } from '../api/api';
import { ChildrenProps } from '../common/ChildrenProps';
import { Group } from '../group/Group';

interface HomeContext{
    groups?:Group[]
    loading:boolean
    getGroups:()=>void
    refreshGroups:()=>void
}

const homeContext = createContext({} as HomeContext);

export function HomeContextProvider({ children }:ChildrenProps) {
  const [groups, setGroups] = useState<Group[]>();
  const [loading, setLoading] = useState(true);

  async function getGroups() {
    setLoading(true);
    const res = await api.get('/groups/recommend', {
      params: {
        _expand: 'artist',
      },
    });
    setGroups(res.data);
    setLoading(false);
  }

  function refreshGroups() {
    if (window.location.pathname === '/') {
      getGroups();
    }
  }

  return (
    <homeContext.Provider value={{
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
