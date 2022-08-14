export function formatMusicTime(timeInSeconds:number) {
  let minutes:any = Math.floor(timeInSeconds / 60);
  minutes = (minutes >= 10) ? minutes : `0${minutes}`;
  let seconds:any = Math.floor(timeInSeconds % 60);
  seconds = (seconds >= 10) ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}
