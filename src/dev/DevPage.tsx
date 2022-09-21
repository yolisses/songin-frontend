import { useUser } from '../user/UserContext';

export function DevPage() {
  const { user } = useUser();
  return (
    <div>
      { JSON.stringify(user)}
    </div>
  );
}
