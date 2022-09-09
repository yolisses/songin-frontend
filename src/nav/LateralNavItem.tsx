/* eslint-disable react/jsx-no-bind */
import { MouseEvent } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface LateralNavItemProps{
    to:string
    Icon:IconType
    text:string
    onClick?:(e:MouseEvent)=>void
}

export function LateralNavItem({
  to, Icon, text, onClick,
}:LateralNavItemProps) {
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
