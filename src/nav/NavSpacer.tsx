import { useMd } from '../responsive/useMd';

export function NavSpacer() {
  const md = useMd();
  if (md) return null;

  return (<div className="h-12" />);
}
