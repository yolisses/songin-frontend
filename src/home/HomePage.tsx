import { useEffect } from 'react';
import { Nav } from '../nav/Nav';
import { Carrousel } from './Carrousel';
import { Spinner } from '../common/Spinner';
import { useHome } from './HomeContext';

export function HomePage() {
  const { groups, getGroups, loading } = useHome();

  useEffect(() => {
    if (!groups) {
      getGroups();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 center text-lg expand-directions fixed pointer-events-none">
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
