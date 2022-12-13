import React, { FC } from "react";
import styles from './mobile-form.module.css'
import { Input } from "../input/input";
import { Button } from "../button/button";

export const MobileForm: FC = () => {

  return (
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
        <Button title="Зарегистрироваться"/>
      </div>
    </form>

  )
}
