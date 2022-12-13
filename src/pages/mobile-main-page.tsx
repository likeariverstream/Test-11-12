import React from "react";
import styles from './mobile-main-page.module.css'
import { MobileHeader } from "../components/mobile-header/mobile-header";
import { MobileMain } from "../components/mobile-main/mobile-main";


export const MobileMainPage = () => {

  return (
    <main className={styles.main}>
      <MobileHeader />
      <MobileMain />

    </main>
  )
}
