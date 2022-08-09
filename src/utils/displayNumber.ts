export function displayNumber(num:number, digits:number) {
  const suffix = [
    { value: 1, symbol: '' },
    { value: 1E3, symbol: 'K' },
    { value: 1E6, symbol: 'M' },
    { value: 1E9, symbol: 'G' },
    { value: 1E12, symbol: 'T' },
    { value: 1E15, symbol: 'P' },
    { value: 1E18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = suffix.length - 1; i > 0; i -= 1) {
    if (num >= suffix[i].value) {
      break;
    }
  }
  return (num / suffix[i].value)
    .toFixed(digits)
    .replace(rx, '$1') + suffix[i].symbol;
}
