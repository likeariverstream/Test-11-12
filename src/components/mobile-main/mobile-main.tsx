import React from 'react';
import styles from './mobile-main.module.css'
import { Card } from '../card/card';

export const MobileMain = () => {

  return (
      <main className={styles.main}>
        <section className={styles.content}>
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <button className={styles.button}>Показать еще
          <div className={styles.image}></div>
        </button>
      </main>
  )
}
