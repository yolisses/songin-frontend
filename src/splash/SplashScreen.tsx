export function SplashScreen() {
  return (
    <div className="expand fixed flex justify-center items-center flex-col">
      <div className="my-auto flex flex-col items-center gap-4">
        <img
          alt="logo"
          width={80}
          src="logo/gradient.svg"
          className="bg-transparent w-20"
        />
        <h1 className="text-3xl logo">Sonhin</h1>
      </div>
    </div>
  );
}
