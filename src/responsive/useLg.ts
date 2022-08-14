import { useMediaQuery } from 'react-responsive';

export function useLg() {
  return useMediaQuery({ query: '(min-width: 1024px)' });
}
