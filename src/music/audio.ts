import { Music } from './Music';

export function audio(music:Music) {
  const avaliableAudios = 10;
  const id = music.id % avaliableAudios;
  return `https://sonhin.s3.sa-east-1.amazonaws.com/portfolio/${id}.mp3`;
}
