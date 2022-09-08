import { FloatingTitle } from '../common/FloatingTitle';
import { Favorites } from './Favorites';

export function FavoritesPage() {
  return (
    <div className="p-2 w-full">
      <FloatingTitle>
        Favorites
      </FloatingTitle>
      <Favorites />
    </div>
  );
}
