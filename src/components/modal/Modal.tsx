import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = React.memo(
  ({ isOpen, onClose, children }) => {
    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div
        className={styles.modalOverlay}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
        onClick={onClose}
      >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            onClick={handleClose}
            className={styles.modalCloseBtn}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      </div>,
      document.getElementById("modal-root") as HTMLElement
    );
  }
);

export default Modal;
