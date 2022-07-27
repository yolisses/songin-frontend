/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { useSignIn } from './useSignIn';

declare global{
  interface Window{
    google?:any
  }
}

export function GoogleButton() {
  const divRef = useRef(null);
  const { signIn } = useSignIn();

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: '456371025061-44c24jcod62qnejc2kp6f8dmj3amlshn.apps.googleusercontent.com',
        callback: (res:any, error:any) => {
          if (error) {
            alert(error);
          }
          signIn(res.credential);
        },
      });
    }
  }, [window.google]);

  useEffect(() => {
    if (divRef.current && window.google) {
      window.google.accounts.id.renderButton(divRef.current, {
        size: 'large',
        type: 'standard',
        theme: 'outline',
        text: 'sign_in_with',
        shape: 'rectangular',
        logo_alignment: 'left',
      });
    }
  }, [divRef.current, window.google]);
  return (
    <>
      <div
        className="h-10"
        ref={divRef}
      />
      <script src="https://accounts.google.com/gsi/client" async />
    </>
  );
}
