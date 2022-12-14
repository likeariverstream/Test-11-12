import React from 'react';
import styles from './mobile-main.module.css'
import { Card } from '../card/card';
import { usePagination } from '../../utils/hooks';

export const MobileMain = () => {

  const savedPage = JSON.parse(localStorage.getItem('page') as string) || 1
  const { handleChangePage, array } = usePagination(4, savedPage)

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        {array.map((element) => {
          return <Card key={element.id}
            id={element.id}
            firstName={element.first_name}
            lastName={element.last_name}
            avatar={element.avatar} />
        })}
      </section>
      <button className={styles.button} onClick={handleChangePage}>Показать еще
        <div className={styles.image}></div>
      </button>
    </main>
  )
}
