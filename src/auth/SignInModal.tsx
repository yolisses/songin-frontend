import { GoogleButton } from '../signIn/GoogleButton';

interface SignInModalProps{
  text?:string
}

export function SignInModal({ text }:SignInModalProps) {
  return (
    <div className="flex flex-row items-stretch">
      <div
        className="bg-center bg-no-repeat w-20 bg-cover pt-8 p-4 text-2xl"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400)' }}
      />
      <div className="flex flex-col gap-8 p-8">
        <h3 className="text-2xl">
          Sign in to
          {' '}
          {text || 'continue'}
        </h3>
        <div className="flex center pr-20">
          <GoogleButton />
        </div>
        <div className="text-xs text-center max-w-[20rem]">
          By signing in you accept our
          {' '}
          <a href="/privacy-policy" className="underline">
            privacy policy
          </a>
          {' '}
          and
          {' '}
          <a href="/use-terms" className="underline">
            use terms
          </a>
        </div>
      </div>
    </div>
  );
}
