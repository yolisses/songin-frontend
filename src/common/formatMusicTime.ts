export function formatMusicTime(timeInSeconds:number) {
  const minutes:any = Math.floor(timeInSeconds / 60);
  let seconds:any = Math.floor(timeInSeconds % 60);
  seconds = (seconds >= 10) ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}
