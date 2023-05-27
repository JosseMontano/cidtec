import styles from "@/styles/global/modal.module.css";

export interface ModalType {
  isShown: boolean;
  hide: () => void;
  modalContent: any;
  bakground?: string;
  color?: string;
}

export const Modal = (params: ModalType) => {
  const { isShown, hide, modalContent } = params;

  const classNameModal = isShown
    ? styles.container + " " + styles.modal_open
    : styles.container;

  const handleModalContainerClick = (e: any) => e.stopPropagation();

  return (
    <div className={classNameModal} onClick={hide}>
      <div
        className={styles.container_soon}
        onClick={(e) => handleModalContainerClick(e)}
      >
        <p className={styles.close} onClick={hide}>
          X
        </p>
        {modalContent}
      </div>
    </div>
  );
};
