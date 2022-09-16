import { FaUser } from 'react-icons/fa';
import { User } from '../user/User';
import { useUser } from '../user/UserContext';

interface FollowButtonProps{
    user:User
}

export function FollowButton({ user }:FollowButtonProps) {
  const { user: currentUser } = useUser();
  const isSameUser = user.id === currentUser?.id;

  if (isSameUser) {
    return null;
  }

  return (
    <button className="flex flex-row items-center gap-2 md:mr-auto">
      <FaUser />
      Follow
    </button>
  );
}
