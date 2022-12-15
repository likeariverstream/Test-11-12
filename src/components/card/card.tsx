import React, { FC } from "react";
import styles from './card.module.css';
import { useHistory } from "react-router";
import { TCard } from "../../utils/types";

export const Card: FC<TCard> = ({
  id,
  firstName,
  lastName,
  avatar }) => {
  const history = useHistory();

  const handleClick = React.useCallback((): void => {
    history.push(`/associate/${id}`)

  }, [history, id])

  return (
    <div className={styles.card} >
      <div className={styles.box}
        onClick={handleClick}><img className={styles.image} src={avatar} alt={lastName} /></div>
      <p className={styles.title}>{`${firstName} ${lastName}`}</p>
      <div className={styles.container}>
        <button className={styles.like}></button>
      </div>
    </div>

  )
}
