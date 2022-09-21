import { User } from '../user/User';
import { LoadingLine } from '../common/LoadingLine';

interface Props{
    user?:User
}

export function NickIndicator({ user }:Props) {
  const loading = user === undefined;

  if (loading) {
    return <LoadingLine w={32} />;
  }

  if (user.signed) {
    return (
      <>
        @
        {user?.nick}
      </>
    );
  }

  return (
    <>
      Sign in to have a @nick
    </>
  );
}
