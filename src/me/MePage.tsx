import { Link } from 'react-router-dom';
import { FaBell, FaChevronRight, FaCog } from 'react-icons/fa';
import { Nav } from '../nav/Nav';
import { History } from '../history/History';
import { useUser } from '../user/UserContext';

export function MePage() {
  const { user } = useUser();
  const iconSize = 22;
  return (
    <>
      <div className="flex flex-row justify-end gap-4 p-2">
        <Link to="/notifications">
          <FaBell size={iconSize} />
        </Link>
        <Link to="/config">
          <FaCog size={iconSize} />
        </Link>
      </div>
      <div className="flex flex-row items-center gap-2 p-2">
        <img
          src={user.image}
          alt={user.name}
          className="rounded-full bg-gray-200 aspect-square h-20"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">
            {user.name}
          </h1>
          <button
            type="button"
            className="rounded-full p-1 px-3 pr-2 text-sm bg-black bg-opacity-10"
          >
            Perfil
            <FaChevronRight className="inline pb-[0.1rem]" />
          </button>
        </div>
      </div>
      <div className="sticky top-0">
        <div className="absolute flex flex-row gap-4 w-screen top-0 bg-white h-12 items-center px-2">
          <a href="#favorites">Favoritas</a>
          <a href="#history">Histórico</a>
        </div>
      </div>
      <div
        className="flex flex-row overflow-x-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="w-screen flex-shrink-0 pt-12 px-2" id="favorites">
          <History />
        </div>
        <div className="w-screen flex-shrink-0 pt-12 px-2" id="history">
          <History />
        </div>
      </div>
      <Nav />
    </>

  );
}
