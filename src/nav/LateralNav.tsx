import {
  FaHeart, FaHistory, FaHome, FaSearch, FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMd } from '../responsive/useMd';

export function LateralNav() {
  const md = useMd();
  if (!md) return null;

  return (
    <>
      <div className="pr-[10rem] max-w-[10rem]" />
      <div className="flex flex-col text-lg fixed top-0 w-[10rem]">
        <div className="p-2 pb-4 flex flex-row items-center gap-2">
          <img alt="logo" src="logo/gradient.svg" className="aspect-square w-5" />
          Musikz
        </div>
        <Link to="/" className="flex flex-row items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <FaHome />
          Início
        </Link>
        <button className="flex flex-row items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <FaSearch />
          Pesquisar
        </button>
        <Link to="/favorites" className="flex flex-row items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <FaHeart />
          Favoritas
        </Link>
        <Link to="/history" className="flex flex-row items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <FaHistory />
          Histórico
        </Link>
        <Link to="/me" className="flex flex-row items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <FaUser />
          Perfil
        </Link>
      </div>
    </>
  );
}
