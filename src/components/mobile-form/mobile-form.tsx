import React, { FC } from "react";
import styles from './mobile-form.module.css'
import { Input } from "../input/input";
import { Button } from "../button/button";
import { useFormAndValidation } from '../../utils/hooks';

export const MobileForm: FC = () => {

  const { values, handleChange, errors, isValid } = useFormAndValidation()

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Регистрация</h3>
        <p className={styles.text}>Имя</p>
        <Input isValid name="user"
          type="text" minlength={2} maxlength={30} value={values.user || ''}
          error={errors.user}
          placeholder={`Имя`}
          onChange={handleChange} />
        <p className={styles.text}>Электронная почта</p>
        <Input isValid name="email"
          type="email" value={values.email}
          error={errors.email || ''}
          placeholder={`example@mail.ru`}
          onChange={handleChange} />
        <p className={styles.text}>Пароль</p>
        <Input isValid name="password"
          type="password" minlength={6} value={values.password || ''}
          error={values.password !== values.check ? 'Пароли должны совпадать' : errors.password}
          placeholder={`******`}
          onChange={handleChange} />
        <p className={styles.text}>Подтвердите пароль</p>
        <Input isValid name="check"
          type="password" minlength={6} value={values.check || ''}
          error={values.check !== values.password ? 'Пароли должны совпадать' : errors.check}
          placeholder={`******`}
          onChange={handleChange} />
        <Button type='submit' isValid={isValid} title="Зарегистрироваться" />
      </div>
    </form>
  )
}
