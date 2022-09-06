import {
  FaHeart, FaHistory, FaHome, FaSearch, FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMd } from '../responsive/useMd';
import { useUser } from '../user/UserContext';

export function LateralNav() {
  const md = useMd();
  const { user } = useUser();
  if (!md) return null;

  return (
    <>
      <div className="pr-[10rem] max-w-[10rem]" />
      <div className="flex flex-col text-lg fixed top-0 w-[10rem] pt-10">
        <Link
          to="/"
          className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
        >
          <FaHome />
          Início
        </Link>
        <Link
          to="/search"
          className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
        >
          <FaSearch />
          Pesquisar
        </Link>
        <Link
          to="/favorites"
          className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
        >
          <FaHeart />
          Favoritas
        </Link>
        <Link
          to="/history"
          className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
        >
          <FaHistory />
          Histórico
        </Link>
        <Link
          to={`/@${user.nickname}`}
          className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
        >
          <FaUser />
          Perfil
        </Link>
      </div>
    </>
  );
}
