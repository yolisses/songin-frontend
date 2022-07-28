export function SplashScreen() {
  return (
    <div className="width-screen h-screen flex justify-center items-center flex-col">
      <div className="my-auto flex flex-col items-center gap-4">
        <img src="logo/gradient.svg" className="pl-3" alt="logo" width={100} />
        <h1 className="text-3xl font-bold bg-gradient-to-tr from-blue-700 to-cyan-500 bg-clip-text text-transparent">Musiks</h1>
      </div>
      <div className="font-thin font-lg">
        by
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        <img src="logo/nano.svg" className="pb-1/2" alt="logo" width={20} />
        <h3 className="text-2xl bg-gradient-to-tr font-mono from-blue-700 to-cyan-500 bg-clip-text text-transparent">Nano</h3>
      </div>
    </div>
  );
}
