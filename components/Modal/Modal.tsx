import React from 'react';
import { ModalProps } from '@/components/Modal/modal.props';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';

import styles from './Modal.module.css';

const Modal: React.FC<ModalProps> = ({ children, show, closeModal }) => {
  const duration = 300;

  return (
    <CSSTransition
      timeout={duration}
      in={show}
      unmountOnExit
      classNames='modal'
    >
      <div className={styles.modalContainer}>
        <div className={styles.closeWrap} onClick={closeModal}><CloseIcon className={styles.icon} /></div>
        <div className={styles.modalWrap}>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
