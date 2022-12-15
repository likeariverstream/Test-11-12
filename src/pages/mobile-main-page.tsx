import React from "react";
import styles from './mobile-main-page.module.css'
import { MobileHeader } from "../components/mobile-header/mobile-header";
import { MobileMain } from "../components/mobile-main/mobile-main";
import { useSelector } from "../utils/hooks";
import { Redirect } from "react-router";
import { routes } from "../utils/constants";

export const MobileMainPage = () => {

  const { isRegistred } = useSelector(store => store.register)

  if (!isRegistred) {
    return <Redirect to={routes.register} />
  }

  return (
    <main className={styles.main}>
      <MobileHeader />
      <MobileMain />
    </main>
  )
}
