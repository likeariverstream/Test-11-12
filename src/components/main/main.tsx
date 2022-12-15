import React from 'react';
import styles from './main.module.css'
import { Card } from '../card/card';
import { useSelector } from '../../utils/hooks';

export const Main = () => {

  const { data } = useSelector(store => store.users);

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        {data.map(element => {
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
