import { FaUser } from 'react-icons/fa';

export function FollowButton() {
  return (
    <button className="flex flex-row items-center gap-2 md:mr-auto">
      <FaUser />
      Follow
    </button>
  );
}
