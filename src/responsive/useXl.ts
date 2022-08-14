import { useMediaQuery } from 'react-responsive';

export function useXl() {
  return useMediaQuery({ query: '(min-width: 1280px)' });
}
