import React from "react";
import styles from './register-page.module.css';
import { Form } from "../components/form/form";
import { useSelector } from "../utils/hooks";
import { Redirect } from "react-router";
import { routes } from "../utils/constants";

export const RegisterPage = () => {

  const { isRegistred } = useSelector(store => store.register)
  if (isRegistred) {
    return <Redirect to={routes.main} />
  }
  
  return (
    <main className={styles.main}>
      <Form />
    </main>
  )
}
