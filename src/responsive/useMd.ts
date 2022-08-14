import { useMediaQuery } from 'react-responsive';

export function useMd() {
  return useMediaQuery({ query: '(min-width: 768px)' });
}
