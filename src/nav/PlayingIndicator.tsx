interface PlayingIndicatorProps{
    playing:boolean
}

export function PlayingIndicator({ playing }:PlayingIndicatorProps) {
  const playState = playing ? 'running' : 'paused';
  return (
    <div className="flex flex-row items-center h-5 gap-[0.15rem]">
      <div
        className="w-1 h-5 bg-black animate-spring"
        style={{
          animationDelay: '0s',
          animationDuration: '0.8s',
          animationPlayState: playState,
        }}
      />
      <div
        className="w-1 h-5 bg-black animate-spring"
        style={{
          animationDelay: '0.4s',
          animationDuration: '0.9s',
          animationPlayState: playState,
        }}
      />
      <div
        className="w-1 h-5 bg-black animate-spring"
        style={{
          animationDelay: '0.2s',
          animationDuration: '0.7s',
          animationPlayState: playState,
        }}
      />
    </div>
  );
}
