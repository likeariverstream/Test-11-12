import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router';
import styles from './associate.module.css'
import { useSelector } from '../../utils/hooks';
import { status } from '../../utils/constants';
import { Modal } from '../modal/modal';
import { ChangeAvatar } from '../change-avatar/change-avatar';

export const Associate = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data } = useSelector(store => store.users);
  const { id } = useParams<{ id: string }>()
  const user = data.find(i => i.id === Number(id));
  const handleChangeImage = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      {user && <div className={styles.container}>
        <div className={styles.box}>
          <img className={styles.image} src={user?.avatar} alt={`${user?.first_name} ${user?.last_name}`} onClick={handleChangeImage} />
        </div>
        <div className={styles.caption}>
          <h3 className={styles.title}>{`${user?.first_name} ${user?.last_name}`}</h3>
          <p className={styles.subtitle}>{status}</p>
        </div>
      </div>}
      {isOpen && <Modal closeModal={closeModal}>
        <ChangeAvatar closeModal={closeModal} />
      </Modal>}
    </>
  )
}
