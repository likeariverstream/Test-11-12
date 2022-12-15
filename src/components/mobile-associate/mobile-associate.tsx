import React from 'react';
import styles from './mobile-associate.module.css'
import { status } from '../../utils/constants';
import { useSelector } from '../../utils/hooks';
import { useParams } from 'react-router';

export const MobileAssociate = () => {
  const { data } = useSelector(store => store.users);
  const { id } = useParams<{ id: string }>()
  const user = data.find(i => i.id === Number(id))

  return (
    <div className={styles.container}>
      <caption className={styles.caption}>
        <h3 className={styles.title}>{`${user?.first_name} ${user?.last_name}`}</h3>
        <p className={styles.subtitle}>{status}</p>
      </caption>
      <div className={styles.box}>
        <img className={styles.image} src={user?.avatar} alt={`${user?.first_name} ${user?.last_name}`} />
        </div>
    </div>
  )
}
