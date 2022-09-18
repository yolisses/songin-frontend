import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

export function DevPage() {
  const { data } = useVisitorData();

  console.log(data);

  if (data) {
    // perform some logic based on the visitor data
    return (
      <div>
        Welcome
        {' '}
        {data.visitorFound ? 'back' : ''}
        !
      </div>
    );
  }
  return null;
}
