import { useState } from 'react';

interface ModalState {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModal = (): ModalState => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (): void => {
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  return {
    showModal,
    openModal,
    closeModal,
  };
};

export default useModal;
