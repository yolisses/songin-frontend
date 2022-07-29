import { Spinner } from '../common/Spinner';
import { GoogleButton } from './GoogleButton';

export function SignInPage() {
  const loading = false;

  return (
    <div className="overflow-hidden">
      <div
        className="fixed top-0 -z-40 w-screen h-screen brightness-[0.6] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400)' }}
      />
      <div
        className="fixed top-0 -z-50 w-screen h-screen brightness-[0.6] bg-gradient-to-tr bg-blue-900 from-[#015A86] via-blue-900 to-[#03D27F]"
      />
      <div className="text-white w-screen h-screen flex flex-col items-center justify-center">
        <div className="my-auto flex flex-col gap-8 items-center">
          <div>
            <div className="flex flex-row gap-1">
              <img src="logo/white.svg" alt="logo" width={15} className="inline-block" />
              <h2 className="text-lg">Musikz</h2>
            </div>
            <h1 className="text-3xl uppercase">Vem curtir vibes</h1>
          </div>
          {loading ? (
            <div className="brightness-0 invert">
              <Spinner size={2.5} />
            </div>
          )
            : <GoogleButton />}
        </div>
        <div className="text-xs text-center">
          Ao prosseguir você concorda com a
          {' '}
          <a href="/privacy-policy" className="underline">
            Política de privacidade
          </a>
          e os
          {' '}
          <a href="/use-terms" className="underline">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  );
}
