import React, { FC } from "react";
import styles from './input.module.css';
import MediaQuery from "react-responsive";

type TInput = {
  placeholder?: string
}

export const Input: FC<TInput> = ({ placeholder }) => {
  const [error, setError] = React.useState(false)
  return (
    <><MediaQuery minWidth={500}>
      <div className={styles.container}>
        <input className={`${styles.input} ${error && styles.border}`} placeholder={placeholder} />
        {error && <span className={styles.error}>Ошибка</span>}
      </div>
    </MediaQuery>
      <MediaQuery maxWidth={500}>
        <div className={styles.container}>
          <input className={`${styles.mobile} ${error && styles.border}`} placeholder={placeholder} />
          {error && <span className={styles.error}>Ошибка</span>}
        </div>
      </MediaQuery>
    </>
  )
}
