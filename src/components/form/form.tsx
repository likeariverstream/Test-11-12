import React, { FC } from "react";
import styles from './form.module.css'
import { Input } from "../input/input";
import { Button } from "../button/button";
import MediaQuery from "react-responsive";
import {
  useFormAndValidation
} from '../../utils/validate';

export const Form: FC = () => {


  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()


  return (
    <>
      <MediaQuery minWidth={500}>
        <form className={styles.form}>
          <div className={styles.container}>
            <h3 className={styles.heading}>Регистрация</h3>
            <p className={styles.text}>Имя</p>
            <Input isValid name="user" type="text" minlength={2} maxlength={30} value={values.user} error={errors.user} placeholder={`Имя`} onChange={handleChange} />
            <p className={styles.text}>Электронная почта</p>
            <Input isValid name="email" type="email" value={values.email} error={errors.email} placeholder={`example@mail.ru`} onChange={handleChange} />
            <p className={styles.text}>Пароль</p>
            <Input isValid name="password" type="password" minlength={8} value={values.password}
              error={values.password !== values.check ? 'Пароли должны совпадать' : errors.password} placeholder={`******`} onChange={handleChange} />
            <p className={styles.text}>Подтвердите пароль</p>
            <Input isValid name="check" type="password" minlength={8} value={values.check}
              error={values.check !== values.password ? 'Пароли должны совпадать' : errors.check} placeholder={`******`} onChange={handleChange} />
            <Button isValid={isValid} title="Зарегистрироваться" />
          </div>
        </form>
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <form className={styles.mobileForm}>
          {/* <div className={styles.mobileContainer}>
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
      </MediaQuery>
    </>
  )
}
