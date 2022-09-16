import { useEffect } from 'react';
import { Nav } from '../nav/Nav';
import { useHome } from './HomeContext';
import { Carrousel } from './Carrousel';
import { repeat } from '../common/repeat';

export function HomePage() {
  const {
    groups, getGroups, error,
  } = useHome();

  useEffect(() => {
    if (!groups) {
      getGroups();
    }
  }, []);

  if (error) {
    return (
      <div className="flex flex-col gap-8 center text-lg expand-directions fixed">
        Something gone wrong loading the songs
        <button
          onClick={getGroups}
          className="bg-blue-500 rounded-lg p-2"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 py-4 overflow-hidden">
      {groups ? groups.map((group) => (
        <Carrousel
          group={group}
        />
      ))
        : repeat(<Carrousel />, 4)}
      <Nav />
    </div>
  );
}
