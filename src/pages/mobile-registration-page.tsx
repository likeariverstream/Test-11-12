import React from "react";
import styles from './mobile-registration-page.module.css'
import { MobileForm } from "../components/mobile-form/mobile-form";

export const MobileRegistrationPage = () => {

  return (
    <main className={styles.main}>
      <MobileForm />
    </main>
  )
}
