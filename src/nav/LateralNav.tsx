import {
  FaHeart, FaHistory, FaHome, FaSearch, FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMd } from '../responsive/useMd';
import { useUser } from '../user/UserContext';
import { LateralNavItem } from './LateralNavItem';

export function LateralNav() {
  const md = useMd();
  const { user } = useUser();
  if (!md) return null;

  return (
    <>
      <div className="pr-[10rem] max-w-[10rem]" />
      <div className="flex flex-col text-lg fixed top-0 w-[10rem]">
        <div className="flex flex-row items-center gap-2 p-2">
          <img
            alt="logo"
            width={20}
            src="/logo/gradient.svg"
            className="bg-transparent"
          />
          <h1 className="text-xl font-bold bg-gradient-to-tr from-sky-500 to-purple-500 bg-clip-text text-transparent">Sonhin</h1>
        </div>
        <LateralNavItem
          to="/"
          text="Início"
          Icon={FaHome}
        />
        <LateralNavItem
          to="/search"
          Icon={FaSearch}
          text="Pesquisar"
        />
        <LateralNavItem
          Icon={FaHeart}
          to="/favorites"
          text="Favoritas"
        />
        <LateralNavItem
          to="/history"
          text="Histórico"
          Icon={FaHistory}
        />
        <LateralNavItem
          text="Perfil"
          Icon={FaUser}
          to={`/@${user.nickname}`}
        />
      </div>
    </>
  );
}
