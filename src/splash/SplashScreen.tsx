export function SplashScreen() {
  return (
    <div className="width-screen h-screen flex justify-center items-center flex-col">
      <div className="my-auto flex flex-col items-center gap-4">
        <img
          alt="logo"
          width={86}
          src="logo/gradient.svg"
          className="bg-transparent"
        />
        <h1 className="text-3xl logo">Sonhin</h1>
      </div>
    </div>
  );
}
