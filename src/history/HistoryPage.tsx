import { FloatingTitle } from '../common/FloatingTitle';
import { History } from './History';

export function HistoryPage() {
  return (
    <div className="p-2 w-full">
      <FloatingTitle>
        Histórico
      </FloatingTitle>
      <History />
    </div>
  );
}
