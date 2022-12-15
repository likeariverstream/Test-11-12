import React, { FC } from 'react';
import styles from './button.module.css'
import MediaQuery from 'react-responsive';
import { TButton } from '../../utils/types';

export const Button: FC<TButton> = ({ title, isValid, type }) => {

  return (
    <>
      <MediaQuery minWidth={500}>
        <button type={type} disabled={!isValid ? true : false} className={styles.button}>{title}</button>
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <button type={type} disabled={!isValid ? true : false} className={styles.mobile}>{title}</button>
      </MediaQuery>
    </>
  )
}
