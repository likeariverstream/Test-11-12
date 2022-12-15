import React from 'react';
import styles from './mobile-main.module.css'
import { Card } from '../card/card';
import { useSelector } from '../../utils/hooks';

export const MobileMain = () => {
  const { data } = useSelector(store => store.users);

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        {data.map((element, index) => {
          if (index < 4)
            return <Card key={element.id}
              id={element.id}
              firstName={element.first_name}
              lastName={element.last_name}
              avatar={element.avatar} />
        })}
      </section>
      <button className={styles.button}>Показать еще
        <div className={styles.image}></div>
      </button>
    </main>
  )
}
