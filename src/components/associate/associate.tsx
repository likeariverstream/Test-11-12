import React from 'react';
import { useParams } from 'react-router';
import styles from './associate.module.css'
import { useSelector } from '../../utils/hooks';
import { status } from '../../utils/constants';

export const Associate = () => {
  const { data } = useSelector(store => store.users);
  const { id } = useParams<{ id: string }>()
  const user = data.find(i => i.id === Number(id))
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.image} src={user?.avatar} alt={`${user?.first_name} ${user?.last_name}`} />
      </div>
      <div className={styles.caption}>
        <h3 className={styles.title}>{`${user?.first_name} ${user?.last_name}`}</h3>
        <p className={styles.subtitle}>{status}</p>
      </div>
    </div>
  )
}
