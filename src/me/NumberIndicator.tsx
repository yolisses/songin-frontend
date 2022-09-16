import { displayNumber } from '../utils/displayNumber';

interface NumberIndicatorProps {
    label:string
    amount?:number
}

export function NumberIndicator({ label, amount }:NumberIndicatorProps) {
  return (
    <div className="flex flex-col items-center">
      {amount
        ? <div className="text-lg">{displayNumber(amount, 1)}</div>
        : <div className="gradient-loading w-8">&nbsp;</div>}
      <div className="text-xs">{label}</div>
    </div>
  );
}
