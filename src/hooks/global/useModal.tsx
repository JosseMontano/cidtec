import { useState } from "react";
import styles from "@/styles/global/modal.module.css";

// =================== HOOK =============

export const useModal = () => {
  const [stateModal, setStateModal] = useState(false);
  const toggle = () => setStateModal(!stateModal);

  return {
    stateModal,
    toggle,
  };
};

// =================== COMPONENT =============

export interface ModalType {
  stateModal: boolean;
  toggle: () => void;
  modalContent: JSX.Element;
}

export const Modal = (params: ModalType) => {
  const { stateModal, toggle, modalContent } = params;

  const classNameModal = stateModal
    ? styles.container + " " + styles.modal_open
    : styles.container;

  const handleModalContainerClick = (e: any) => e.stopPropagation();

  return (
    <div className={classNameModal} onClick={toggle}>
      <div
        className={styles.container_soon}
        onClick={(e) => handleModalContainerClick(e)}
      >
        <p className={styles.close} onClick={toggle}>
          X
        </p>
        {modalContent}
      </div>
    </div>
  );
};
