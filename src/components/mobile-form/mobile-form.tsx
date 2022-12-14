import React, { FC } from "react";
import styles from './mobile-form.module.css'
import { Input } from "../input/input";
import { Button } from "../button/button";
import {

  useFormAndValidation
} from '../../utils/validate';

export const MobileForm: FC = () => {

  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()
  
  return (
    <form className={styles.form}>
      {/* <div className={styles.container}>
        <h3 className={styles.heading}>Регистрация</h3>
        <p className={styles.text}>Имя</p>
        <Input name="user" type="text" minlenght="2" maxlenght="30" value={values.user ?? ''} placeholder={`Имя`} onChange={handleChange} />
        <p className={styles.text}>Электронная почта</p>
        <Input name="email" type="email" value={values.email ?? ''} placeholder={`example@mail.ru`} onChange={handleChange} />
        <p className={styles.text}>Пароль</p>
        <Input name="password" type="password" minlenght="8" value={values.password ?? ''} placeholder={`******`} onChange={handleChange} />
        <p className={styles.text}>Подтвердите пароль</p>
        <Input name="check" type="password" minlenght="8" value={values.check ?? ''} placeholder={`******`} onChange={handleChange} />
        <Button title="Зарегистрироваться" />
      </div> */}
    </form>

  )
}
