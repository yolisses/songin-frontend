/* eslint-disable react/jsx-no-bind */
import { MouseEvent, useState } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { SignInModal } from '../auth/SignInModal';
import { useModal } from '../modal/ModalContext';
import { useUser } from '../user/UserContext';

interface LateralNavItemProps{
    to:string
    Icon:IconType
    text:string
    onClick?:(e:MouseEvent)=>void
}

export function LateralNavItem({
  to, Icon, text, onClick,
}:LateralNavItemProps) {
  const { user } = useUser();
  const { setContent } = useModal();

  function handleClick(e:MouseEvent) {
    if (user) return;
    e.stopPropagation();
    e.preventDefault();
    setContent(<SignInModal text="have a Profile" />);
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
    >
      <Icon />
      {text}
    </Link>
  );
}
