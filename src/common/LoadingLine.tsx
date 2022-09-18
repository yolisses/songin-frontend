interface Props{
    w?:number
    className?:string
}

export function LoadingLine({ w, className }:Props) {
  return (
    <div
      className={`h-[1em] loading mb-1 ${className}`}
      style={{ width: w ? `${w / 4}rem` : undefined }}
    />
  );
}
