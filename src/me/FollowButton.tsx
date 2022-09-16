import { FaUser } from 'react-icons/fa';
import { User } from '../user/User';
import { useUser } from '../user/UserContext';

interface FollowButtonProps{
    user?:User
}

export function FollowButton({ user }:FollowButtonProps) {
  const { user: currentUser } = useUser();
  const isSameUser = user?.id === currentUser?.id;

  if (isSameUser) {
    return null;
  }

  if (!user) {
    return <div className="gradient-loading w-20">&nbsp;</div>;
  }

  return (
    <button className="flex flex-row items-center gap-2">
      <FaUser />
      Follow
    </button>
  );
}
