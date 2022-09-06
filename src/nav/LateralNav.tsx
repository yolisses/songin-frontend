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
      <div className="flex flex-col text-lg fixed top-0 w-[10rem] pt-10">
        <LateralNavItem to="/" Icon={FaHome} text="Início" />
        <LateralNavItem to="/search" Icon={FaSearch} text="Pesquisar" />
        <LateralNavItem to="/favorites" Icon={FaHeart} text="Favoritas" />
        <LateralNavItem to="/history" Icon={FaHistory} text="Histórico" />
        <LateralNavItem to={`/@${user.nickname}`} Icon={FaUser} text="Perfil" />
      </div>
    </>
  );
}
