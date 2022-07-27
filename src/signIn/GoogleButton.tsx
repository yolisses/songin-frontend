/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

export function GoogleButton() {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      (window as any).google.accounts.id.initialize({
        client_id: '456371025061-44c24jcod62qnejc2kp6f8dmj3amlshn.apps.googleusercontent.com',
        callback: (res:any, error:any) => {
          console.log(res.credential);
          // teste
        },
      });
      (window as any).google.accounts.id.renderButton(divRef.current, {
        size: 'large',
        type: 'standard',
        theme: 'outline',
        text: 'sign_in_with',
        shape: 'rectangular',
        logo_alignment: 'left',
      });
      (window as any).google.accounts.id.prompt();
    }
  }, [divRef.current]);

  return (
    <div
      className="h-10"
      ref={divRef}
    />
  );
}
