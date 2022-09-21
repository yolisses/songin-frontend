import { FaUser } from 'react-icons/fa';

import { Profile } from './Profile';
import { useUser } from '../user/UserContext';
import { LoadingLine } from '../common/LoadingLine';

interface FollowButtonProps{
    profile?:Profile
}

export function FollowButton({ profile }:FollowButtonProps) {
  const { user: currentUser } = useUser();
  const isSameUser = profile?.user?.id === currentUser?.id;

  if (isSameUser) {
    return null;
  }

  if (!profile?.user) {
    return <LoadingLine w={20} />;
  }

  return (
    <button className="flex flex-row items-center gap-2">
      <FaUser />
      Follow
    </button>
  );
}
