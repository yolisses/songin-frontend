import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Nav } from '../nav/Nav';
import { Group } from '../group/Group';
import { Carrousel } from './Carrousel';

export function HomePage() {
  const [groups, setGroups] = useState<Group[]>();

  async function getGroups() {
    const res = await api.get('/groups/recommend', {
      params: {
        _expand: 'artist',
      },
    });
    setGroups(res.data);
  }

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <div className="flex flex-col gap-10 py-4 overflow-hidden">
      {groups?.map((group) => (
        <Carrousel group={group} />
      ))}
      <Nav />
    </div>
  );
}
