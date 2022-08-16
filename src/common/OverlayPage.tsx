import { ChildrenProps } from './ChildrenProps';

export function OverlayPage({ children }:ChildrenProps) {
  return (
    <div className="fixed top w-full h-screen z-10 bg-white overflow-hidden">
      <div className="overflow-auto">
        {children}
      </div>
    </div>
  );
}
