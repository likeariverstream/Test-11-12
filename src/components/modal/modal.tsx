import React, { FC } from "react";
import styles from './modal.module.css'
import MediaQuery from "react-responsive";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { TModal } from "../../utils/types";

export const Modal: FC<TModal> = ({ closeModal, children }) => {
  React.useEffect(() => {
    const closeByEsc = ((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    });
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc)
  }, [closeModal]);

  return (
    <>
      <MediaQuery minWidth={500}>
        <ModalOverlay closeModal={closeModal} />
        <div className={styles.modal}>
          <button className={styles.close} onClick={closeModal}></button>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <ModalOverlay closeModal={closeModal} />
        <div className={styles.modal}>
          <button className={styles.closeMobile} onClick={closeModal}></button>
          {children}
        </div>
      </MediaQuery>
    </>
  )
}
