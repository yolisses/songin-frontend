import { FloatingTitle } from '../common/FloatingTitle';
import { Favorites } from './Favorites';

export function FavoritesPage() {
  return (
    <div className="p-2 w-full">
      <FloatingTitle>
        Favoritas
      </FloatingTitle>
      <Favorites />
    </div>
  );
}
