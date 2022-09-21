/* eslint-disable react/jsx-no-bind */
import {
  FaHeart, FaHistory, FaHome, FaSearch, FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { useHome } from '../home/HomeContext';
import { useMd } from '../responsive/useMd';
import { useUser } from '../user/UserContext';
import { LateralNavItem } from './LateralNavItem';
import { SignInModal } from '../auth/SignInModal';
import { useModal } from '../modal/ModalContext';
import { LateralNavLogo } from './LateralNavLogo';

export function LateralNav() {
  const md = useMd();
  const { user } = useUser();
  const { setContent } = useModal();
  const { refreshGroups } = useHome();

  function requireSignIn(e:MouseEvent) {
    if (user) return;
    e.stopPropagation();
    e.preventDefault();
    setContent(<SignInModal text="have a Profile" />);
  }

  if (!md) return null;

  return (
    <div className="flex flex-col text-lg fixed left-0 top-0 w-36 bg-zinc-900">
      <Link
        to="/"
        onClick={refreshGroups}
        className="flex flex-row items-center gap-2 p-2"
      >
        <LateralNavLogo />
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
        onClick={requireSignIn}
        to={user.nick
          ? `/@${user.nick}`
          : '/profile'}
        iconNode={(user && user.image) && (
          <img
            alt={user.name}
            src={user.image}
            className="rounded-full w-5 aspect-square border-white border-2"
          />
        )}
      />
    </div>
  );
}
