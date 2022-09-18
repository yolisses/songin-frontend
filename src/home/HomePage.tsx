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
      <div className="warn">
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
    <div className="flex flex-col gap-4 md:gap-10 py-4 overflow-hidden">
      <div className="md:hidden flex flex-row p-2 gap-1">
        <img
          alt="logo"
          width={20}
          src="/logo/gradient.svg"
          className="bg-transparent"
        />
        <h1 className="text-xl logo">Sonhin</h1>
      </div>
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
