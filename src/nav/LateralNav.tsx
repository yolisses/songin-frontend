import {
  FaHeart, FaHistory, FaHome, FaSearch, FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useHome } from '../home/HomeContext';
import { useMd } from '../responsive/useMd';
import { useUser } from '../user/UserContext';
import { LateralNavItem } from './LateralNavItem';

export function LateralNav() {
  const md = useMd();
  const { user } = useUser();
  if (!md) return null;

  const { refreshGroups } = useHome();

  return (
    <>
      <div className="pr-[10rem] max-w-[10rem]" />
      <div className="flex flex-col text-lg fixed top-0 w-[10rem]">
        <Link
          to="/"
          onClick={refreshGroups}
          className="flex flex-row items-center gap-2 p-2"
        >
          <img
            alt="logo"
            width={20}
            src="/logo/gradient.svg"
            className="bg-transparent"
          />
          <h1 className="text-xl logo">Sonhin</h1>
        </Link>
        <LateralNavItem
          to="/"
          text="Home"
          Icon={FaHome}
          onClick={refreshGroups}
        />
        <LateralNavItem
          to="/search"
          Icon={FaSearch}
          text="Search"
        />
        <LateralNavItem
          Icon={FaHeart}
          to="/favorites"
          text="Favorites"
        />
        <LateralNavItem
          to="/history"
          text="History"
          Icon={FaHistory}
        />
        <LateralNavItem
          Icon={FaUser}
          text="Profile"
          to={user ? `/@${user.nickname}` : '/profile'}
        />
      </div>
    </>
  );
}
