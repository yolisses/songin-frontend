import { ChildrenProps } from './ChildrenProps';

export function FloatingTitle({ children }:ChildrenProps) {
  return (
    <div className="h-20 w-full">
      <h2 className="h-16 top-0 font-light text-4xl flex flex-row items-center w-full bg-white z-10">
        {children}
      </h2>
    </div>

  );
}
