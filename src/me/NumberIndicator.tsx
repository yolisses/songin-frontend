import { LoadingLine } from '../common/LoadingLine';
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
        ? <LoadingLine w={8} />
        : <div className="text-lg">{displayNumber(amount, 1)}</div>}
      <div className="text-xs">{label}</div>
    </div>
  );
}
