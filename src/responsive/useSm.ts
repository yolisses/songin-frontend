import { useMediaQuery } from 'react-responsive';

export function useSm() {
  return useMediaQuery({ query: '(min-width: 640px)' });
}
