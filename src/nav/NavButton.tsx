import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface NavButtonProps{
    to:string
    text:string
    Icon:IconType
}

export function NavButton({ text, Icon, to }:NavButtonProps) {
  return (
    <Link to={to} className="flex flex-col items-center">
      <Icon size={20} />
      <div className="text-xs">
        {text}
      </div>
    </Link>
  );
}
