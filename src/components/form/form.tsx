import React, { FC } from "react";
import styles from './form.module.css'
import { Input } from "../input/input";
import { Button } from "../button/button";
import MediaQuery from "react-responsive";

export const Form: FC = () => {

  return (
    <><MediaQuery minWidth={500}>
      <form className={styles.form}>
        <div className={styles.container}>
          <h3 className={styles.heading}>Регистрация</h3>
          <p className={styles.text}>Имя</p>
          <Input placeholder={`Имя`} />
          <p className={styles.text}>Электронная почта</p>
          <Input placeholder={`example@mail.ru`} />
          <p className={styles.text}>Пароль</p>
          <Input placeholder={`******`} />
          <p className={styles.text}>Подтвердите пароль</p>
          <Input placeholder={`******`} />
          <Button title="Зарегистрироваться" />
        </div>
      </form>
      </MediaQuery>
      <MediaQuery maxWidth={500}>
      <form className={styles.mobileForm}>
        <div className={styles.mobileContainer}>
          <h3 className={styles.heading}>Регистрация</h3>
          <p className={styles.text}>Имя</p>
          <Input placeholder={`Имя`} />
          <p className={styles.text}>Электронная почта</p>
          <Input placeholder={`example@mail.ru`} />
          <p className={styles.text}>Пароль</p>
          <Input placeholder={`******`} />
          <p className={styles.text}>Подтвердите пароль</p>
          <Input placeholder={`******`} />
          <Button title="Зарегистрироваться" />
        </div>
      </form>
      </MediaQuery>
    </>
  )
}
