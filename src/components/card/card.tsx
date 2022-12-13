import React from "react";
import styles from './card.module.css';
import { useHistory } from "react-router";


export const Card = () => {
  const history = useHistory();
  const link = `https://images.unsplash.com/photo-1670718089430-d75ba6c1a194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`
  const user = `Ольга Ильина`
  const id = '10'

  const handleClick = React.useCallback((): void => {
    history.push(`/associate/${id}`)

  }, [history])

  return (
    <div className={styles.card} >
      <div className={styles.box} onClick={handleClick}><img className={styles.image} src={link} alt={user} /></div>
      <p className={styles.title}>{user}</p>
      <div className={styles.container}>
        <button className={styles.like}></button>
      </div>
    </div>

  )
}
