import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface NavItemProps{
    to:string
    text?:string
    Icon?:IconType
    iconNode?:ReactNode
    onClick?:()=>void
}

export function NavItem({
  text, Icon, to, onClick, iconNode,
}:NavItemProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex flex-col items-center w-10"
      style={{ marginBottom: text ? undefined : '1rem' }}
    >
      {Icon && <Icon size={22} />}
      {iconNode}
      <div className="text-xs">
        {text}
      </div>
    </Link>
  );
}
