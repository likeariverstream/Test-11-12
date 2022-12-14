import React, { FC } from "react";
import styles from './input.module.css';
import MediaQuery from "react-responsive";

type TInput = {
  placeholder?: string,
  value?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  type: 'text' | 'email' | 'password'
  minlength?: number
  maxlength?: number
  error?: string
  isValid?: boolean
  pattern?: string
}

export const Input: FC<TInput> = ({
  placeholder,
  value,
  name,
  type,
  onChange,
  error,
  minlength,
  maxlength,
  isValid
}) => {
  console.log(value)
  return (
    <><MediaQuery minWidth={500}>
      <div className={styles.container}>
        <input name={name} type={type}
          minLength={minlength} maxLength={maxlength}
          value={value} className={`${styles.input} ${error && styles.border}`}
          placeholder={placeholder}
          onChange={onChange}
          required />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </MediaQuery>
      <MediaQuery maxWidth={500}>
        <div className={styles.container}>
          <input name={name} type={type}
            minLength={minlength} maxLength={maxlength}
            value={value} className={`${styles.mobile} ${error && styles.border}`}
            placeholder={placeholder}
            onChange={onChange} required />
          {!isValid && error && <span className={styles.error}>{error}</span>}
        </div>
      </MediaQuery>
    </>
  )
}
