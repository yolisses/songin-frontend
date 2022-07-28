import { FaBell, FaChevronRight, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from '../nav/Nav';
import { useUser } from '../user/UserContext';

export function MePage() {
  const { user } = useUser();

  return (
    <>
      <div className="p-4">
        <div className="flex flex-row justify-end gap-4">
          <Link to="/notifications">
            <FaBell size={20} />
          </Link>
          <Link to="/config">
            <FaCog size={20} />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
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

      </div>
      <Nav />
    </>

  );
}
