import React from 'react';
import styles from './associate.module.css'

export const Associate = () => {
  const link = `https://images.unsplash.com/photo-1670718089430-d75ba6c1a194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`
  const user = `Артур Королев`;
  const status = `Партнер`;
  return (
    <div className={styles.container}>
      <div className={styles.box}><img className={styles.image} src={link} alt={user} /></div>
      <caption className={styles.caption}>
        <h3 className={styles.title}>{user}</h3>
        <p className={styles.subtitle}>{status}</p>
      </caption>
    </div>
  )
}
