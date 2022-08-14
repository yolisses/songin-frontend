import { useMediaQuery } from 'react-responsive';

export function useXl2() {
  return useMediaQuery({ query: '(min-width: 1536px)' });
}
