/* eslint-disable react/jsx-no-bind */
import { MouseEvent, useState } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { SignInModal } from '../auth/SignInModal';
import { useModal } from '../modal/ModalContext';

interface LateralNavItemProps{
    to:string
    Icon:IconType
    text:string
    requireSignIn?:boolean
}

export function LateralNavItem({
  to, Icon, text, requireSignIn,
}:LateralNavItemProps) {
  const { setContent } = useModal();

  function handleClick(e:MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    setContent(<SignInModal />);
  }

  return (
    <Link
      to={to}
      onClick={requireSignIn ? handleClick : undefined}
      className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
    >
      <Icon />
      {text}
    </Link>
  );
}
