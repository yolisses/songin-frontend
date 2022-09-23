import { Music } from '../music/Music';
import { User } from '../user/User';

export function image(obj:User|Music, size = 512) {
  const avaliableImages = 1080;
  const brokenImages:{[key:number]:true} = {
    792: true,
    812: true,
    801: true,
  };
  let { id } = obj;
  if (brokenImages[id]) {
    id += 555;
  }
  id %= avaliableImages;

  return `https://picsum.photos/id/${id}/${size}/${size}`;
}
