import React from "react";
import styles from './mobile-register-page.module.css'
import { MobileForm } from "../components/mobile-form/mobile-form";
import { Redirect } from "react-router";
import { useSelector } from "../utils/hooks";
import { routes } from "../utils/constants";

export const MobileRegisterPage = () => {

  const { isRegistred } = useSelector(store => store.register)
  if (isRegistred) {
    return <Redirect to={routes.main} />
  }

  return (
    <main className={styles.main}>
      <MobileForm />
    </main>
  )
}
