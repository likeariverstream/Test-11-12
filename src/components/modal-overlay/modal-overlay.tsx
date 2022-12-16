import React, { FC } from "react";
import styles from './modal-overlay.module.css';
import { TModalOverlay } from "../../utils/types";

export const ModalOverlay: FC<TModalOverlay> = ({ closeModal }) => {

  return (
    <div className={styles.overlay} onMouseDown={closeModal}>
    </div>
  )
}
