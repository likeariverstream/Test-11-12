import React, { FC } from 'react';
import styles from './button.module.css'
import MediaQuery from 'react-responsive';

type TButton = {
  title: string
  isValid?: boolean
}
export const Button: FC<TButton> = ({ title, isValid }) => {

  return (
    <>
      <MediaQuery minWidth={500}>
        <button disabled={isValid ? false : true} className={styles.button}>{title}</button></MediaQuery>
      <MediaQuery maxWidth={500}>
        <button disabled={isValid ? false : true} className={styles.mobile}>{title}</button>
      </MediaQuery>
    </>
  )
}
