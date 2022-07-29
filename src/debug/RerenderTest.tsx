export function RerenderTest() {
  return (
    <div className="text-sm text-purple-500">
      {`<${Math.ceil(1000 * Math.random())}>`}
    </div>
  );
}
