/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { useSignIn } from './useSignIn';

export function GoogleButton() {
  const divRef = useRef(null);
  const { signIn } = useSignIn();

  useEffect(() => {
    if (divRef.current) {
      (window as any).google.accounts.id.initialize({
        client_id: '456371025061-44c24jcod62qnejc2kp6f8dmj3amlshn.apps.googleusercontent.com',
        callback: (res:any, error:any) => {
          if (error) {
            alert(error);
          }
          signIn(res.credential);
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
    }
  }, [divRef.current]);

  return (
    <div
      className="h-10"
      ref={divRef}
    />
  );
}
