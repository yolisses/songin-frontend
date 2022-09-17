import { FloatingTitle } from '../common/FloatingTitle';
import { useUser } from '../user/UserContext';
import { Favorites } from './Favorites';

export function FavoritesPage() {
  const { user } = useUser();

  return (
    <div className="p-2 w-full">
      <FloatingTitle>
        Favorites
      </FloatingTitle>
      <Favorites user={user} />
    </div>
  );
}
