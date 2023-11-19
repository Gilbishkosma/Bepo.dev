'use client';
import styles from './Modal.module.css';
import { useRef, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  Body: FC;
}

/**
 * Renders a modal component with customizable content and animation.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {Function} props.onClose - Callback function called when the modal is closed.
 * @param {React.FC} props.Body - The component to be rendered as the modal content.
 * @returns {JSX.Element} The rendered component.
 */
const Modal = ({ isOpen, onClose, Body }: ModalProp) => {
  /**
   * Reference to the modal DOM element to close the model whgen clicked outside of it.
   */
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * Closes the modal by calling the provided `onClose` callback function.
   *
   * @returns {void}
   */
  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    /**
     * Handles clicks outside of the modal to close it.
     *
     * @param {MouseEvent} event - The click event.
     * @returns {void}
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${styles.modal} ${styles.modalOpen}`}
        >
          <div
            className={`${styles.modalContent} flex justify-center`}
            ref={modalRef}
          >
            <Body />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
