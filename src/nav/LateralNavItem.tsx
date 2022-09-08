/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { SignInModal } from '../auth/SignInModal';
import { useModal } from '../modal/ModalContext';

interface LateralNavItemProps{
    to:string
    Icon:IconType
    text:string
    requireSignIn?:boolean
}

export function LateralNavItem({
  to, Icon, text, requireSignIn,
}:LateralNavItemProps) {
  const { setModal } = useModal();
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setModal(<SignInModal />);
  }

  return (
    <>

      {showModal && <SignInModal />}
      <Link
        to={to}
        onClick={handleClick}
        className="flex flex-row items-center gap-2 p-2 active-opacity rounded-lg"
      >
        <Icon />
        {text}
      </Link>
    </>
  );
}
