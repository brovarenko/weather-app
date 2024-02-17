import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface ModalProps {
  showModal: boolean;
  onCloseModal: () => void;
  children: ReactNode;
  header: string;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  onCloseModal,
  children,
  header,
}) => {
  return (
    <div
      className={clsx(
        styles['modal'],
        showModal ? styles['show'] : styles['hide']
      )}
    >
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <span>{header}</span>
          <span className={styles['close-btn']} onClick={onCloseModal}>
            &times;
          </span>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
