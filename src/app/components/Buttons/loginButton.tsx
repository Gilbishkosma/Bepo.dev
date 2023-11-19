'use client';

import { useState } from "react";
import Modal from "../Modal";
import AuthModal from "../AuthModal";

interface buttonProps {
  text: string;
}

/**
 * Renders a login button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be displayed on the button.
 * @returns {JSX.Element} The rendered component.
 */
const LoginButton = ({ text }: buttonProps) => {
  const [isModalOpen,setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className='btn-ghost btn' onClick={openModal}>{text}</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} Body={AuthModal} />
    </>
  );
};

export default LoginButton;
