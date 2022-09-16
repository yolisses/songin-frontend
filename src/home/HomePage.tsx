import { useEffect } from 'react';
import { useHome } from './HomeContext';
import { Carrousel } from './Carrousel';
import { repeat } from '../common/repeat';
import { NavSpacer } from '../nav/NavSpacer';

export function HomePage() {
  const {
    groups, getGroups, error, loading,
  } = useHome();

  useEffect(() => {
    if (!groups) {
      getGroups();
    }
  }, []);

  if (error) {
    return (
      <div className="flex flex-col gap-8 center text-lg expand fixed">
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
      {!groups || loading ? repeat(<Carrousel />, 4)
        : groups.map((group) => (
          <Carrousel
            group={group}
          />
        ))}
      <NavSpacer />
    </div>
  );
}
