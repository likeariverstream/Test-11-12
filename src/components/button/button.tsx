import React, { FC } from 'react';
import styles from './button.module.css'
import MediaQuery from 'react-responsive';

type TButton = {
  title: string
}
export const Button: FC<TButton> = ({ title }) => {

  return (
    <>
      <MediaQuery minWidth={500}>
        <button className={styles.button}>{title}</button></MediaQuery>
      <MediaQuery maxWidth={500}>
        <button className={styles.mobile}>{title}</button>
      </MediaQuery>
    </>
  )
}
