import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Nav } from '../nav/Nav';
import { Group } from '../group/Group';
import { Carrousel } from './Carrousel';
import { Spinner } from '../common/Spinner';

export function HomePage() {
  const [groups, setGroups] = useState<Group[]>();
  const [loading, setLoading] = useState(true);

  async function getGroups() {
    const res = await api.get('/groups/recommend', {
      params: {
        _expand: 'artist',
      },
    });
    setGroups(res.data);
    setLoading(false);
  }

  useEffect(() => {
    getGroups();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 center text-lg w-full h-screen fixed">
        <Spinner />
        Picking musics just for you
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 py-4 overflow-hidden">
      {groups?.map((group) => (
        <Carrousel group={group} />
      ))}
      <Nav />
    </div>
  );
}
