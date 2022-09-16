/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

import { api } from '../api/api';
import { User } from './User';
import { useUser } from './UserContext';

declare global{
  interface Window{
    google?:any
  }
}

export function GoogleButton() {
  const divRef = useRef(null);
  const { setUser } = useUser();
  const clientId = '456371025061-44c24jcod62qnejc2kp6f8dmj3amlshn.apps.googleusercontent.com';

  async function signIn(credential:string) {
    const res = await api.post('/sign-in', credential);
    const user:User = res.data;
    setUser(user);
  }

  function callback(res:any, error:any) {
    if (error) {
      alert(error);
    }
    signIn(res.credential);
  }

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        callback,
        client_id: clientId,
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
        className="h-10 w-[12.5rem]"
        ref={divRef}
      />
      <script src="https://accounts.google.com/gsi/client" async />
    </>
  );
}
