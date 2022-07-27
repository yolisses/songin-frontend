interface SpinnerProps{
    size?:number
}

export function Spinner({ size = 2 }:SpinnerProps) {
  return (
    <img
      src="spinner.svg"
      className="animate-spin"
      alt="loading"
      style={{
        width: `${size}rem`,
      }}
    />
  );
}
