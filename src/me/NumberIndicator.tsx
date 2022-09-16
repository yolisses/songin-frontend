import { displayNumber } from '../utils/displayNumber';

interface NumberIndicatorProps {
    label:string
    amount?:number
}

export function NumberIndicator({ label, amount }:NumberIndicatorProps) {
  const loading = amount === undefined;

  return (
    <div className="flex flex-col items-center">
      {loading
        ? <div className="loading w-8">&nbsp;</div>
        : <div className="text-lg">{displayNumber(amount, 1)}</div>}
      <div className="text-xs">{label}</div>
    </div>
  );
}
