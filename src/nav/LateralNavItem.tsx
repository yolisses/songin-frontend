import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface LateralNavItemProps{
    to:string
    Icon:IconType
    text:string
}

export function LateralNavItem({ to, Icon, text }:LateralNavItemProps) {
  return (
    <Link
      to={to}
      className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
    >
      <Icon />
      {text}
    </Link>
  );
}
