interface SpinnerProps{
    size?:number
}

export function Spinner({ size = 2 }:SpinnerProps) {
  return (
    <img
      alt="loading"
      src="spinner.svg"
      className="animate-spin bg-transparent"
      style={{
        width: `${size}rem`,
      }}
    />
  );
}
