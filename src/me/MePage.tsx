import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { Nav } from '../nav/Nav';
import { History } from '../history/History';
import { useUser } from '../user/UserContext';
import { Favorites } from '../like/Favorites';
import { TabButtons } from '../tab/TabButtons';
import { TabsContainer } from '../tab/TabsContainer';

export function MePage() {
  const user = useUser().user!;
  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center gap-2 p-2">
        <img
          src={user.image}
          alt={user.name}
          className="rounded-full aspect-square h-20"
        />
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-2xl">
            {user.name}
          </h1>
          <div>
            <Link
              to={`/@${user.nick}?me=true`}
              className="rounded-full inline-block p-1 px-3 pr-2 text-sm bg-black bg-opacity-10"
            >
              Perfil
              <FaChevronRight
                className="inline pb-[0.1rem]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="sticky top-0 flex flex-row h-12 items-center">
        <TabButtons
          tab={tab}
          setTab={setTab}
          labels={['Favoritas', 'Histórico']}
        />
      </div>
      <div className="w-full flex flex-col">
        <TabsContainer selected={tab}>
          <Favorites />
          <History />
        </TabsContainer>
      </div>
      <Nav />
    </div>

  );
}
