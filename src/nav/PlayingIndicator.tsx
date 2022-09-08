interface PlayingIndicatorProps{
    playing:boolean
}

interface IndicatorBarProps{
  delay:number
  duration:number
  playing:boolean
}

function IndicatorBar({ delay, duration, playing }:IndicatorBarProps) {
  const playState = playing ? 'running' : 'paused';
  return (
    <div
      className="w-1 h-5 bg-white animate-spring rounded-full"
      style={{
        animationDelay: `${delay}s`,
        animationPlayState: playState,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

export function PlayingIndicator({ playing }:PlayingIndicatorProps) {
  return (
    <div className="flex flex-row items-center h-5 gap-[0.15rem]">
      <IndicatorBar delay={0} duration={0.8} playing={playing} />
      <IndicatorBar delay={0.4} duration={0.9} playing={playing} />
      <IndicatorBar delay={0} duration={0.7} playing={playing} />
    </div>
  );
}
