import React, { FC } from "react";
import styles from './card.module.css';
import { useHistory } from "react-router";
import { TCard } from "../../utils/types";
import { routes } from "../../utils/constants";

export const Card: FC<TCard> = ({
  id,
  firstName,
  lastName,
  avatar }) => {
  const history = useHistory();
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    setIsLiked(JSON.parse(localStorage.getItem(`${id}`) as string))
  }, []);

  const handleClick = React.useCallback((): void => {
    history.push(`${routes.associate}${id}`)

  }, [history, id])

  const handleLikeClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number): void => {
    setIsLiked(!isLiked);
    isLiked
      ? localStorage.removeItem(`${id}`)
      : localStorage.setItem(`${id}`, JSON.stringify({ id: isLiked }))

  }, [isLiked])


  return (
    <div className={styles.card} >
      <div className={styles.box}
        onClick={handleClick}><img className={styles.image} src={avatar} alt={lastName} /></div>
      <p className={styles.title}>{`${firstName} ${lastName}`}</p>
      <div className={styles.container}>
        <button
          id={`${id}`}
          className={`${styles.like} ${isLiked && styles.active}`}
          onClick={e => handleLikeClick(e, id)}></button>
      </div>
    </div>

  )
}
