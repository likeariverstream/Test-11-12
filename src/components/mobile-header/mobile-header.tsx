import React from "react";
import styles from './mobile-header.module.css';
import { useLocation, useHistory } from "react-router";
import { routes } from "../../utils/constants";
import { MobileAssociate } from "../mobile-associate/mobile-associate";

export const MobileHeader = () => {
  const history = useHistory()
  const main = useLocation().pathname === '/';
  const handleBack = React.useCallback(() => {
    history.goBack()
  }, [history])
  const handleClose = React.useCallback(() => {
    history.push(routes.registration)
  }, [history])
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        {!main && <button className={styles.back}
          style={{
            margin: 0,
            marginBottom: 'auto'
          }} onClick={handleBack}></button>}
        {!main && <MobileAssociate />}
        <button className={styles.close} style={!main ? { marginBottom: 'auto' } : undefined}
          onClick={handleClose}></button></div>
      {main && <><h3 className={styles.heading}>Наша команда</h3>
        <p className={styles.text}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p></>}
    </header>
  )
}