import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface NavButtonProps{
    to:string
    text?:string
    Icon:IconType
    onClick?:()=>void
}

export function NavButton({
  text, Icon, to, onClick,
}:NavButtonProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex flex-col items-center w-10"
    >
      <Icon size={22} />
      <div className="text-xs">
        {text}
      </div>
    </Link>
  );
}
