import { ChildrenProps } from './ChildrenProps';

export function FloatingTitle({ children }:ChildrenProps) {
  return (
    <div className="h-20 w-full">
      <div className="h-20 top-0 font-light text-4xl flex flex-row items-center w-full bg-white z-10">
        {children}
      </div>
    </div>

  );
}
