import { Music } from '../music/Music';
import { User } from '../user/User';

export function image(obj:User|Music, size = 512) {
  const avaliableImages = 1080;
  const id = obj.id % avaliableImages;
  return `https://picsum.photos/id/${id}/${size}/${size}`;
}
