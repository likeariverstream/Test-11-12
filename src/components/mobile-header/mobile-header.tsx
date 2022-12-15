import React from "react";
import styles from './mobile-header.module.css';
import { useLocation, useHistory } from "react-router";
import { routes } from "../../utils/constants";
import { MobileAssociate } from "../mobile-associate/mobile-associate";
import { useDispatch } from "../../utils/hooks";
import { logoutUser } from "../../store/reducers/register";
import { specialistsDscription } from "../../utils/constants";

export const MobileHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const main = useLocation().pathname === '/';
  
  const handleBack = React.useCallback(() => {
    history.goBack();
  }, [history])

  const handleClose = React.useCallback(() => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
    history.push(routes.register);
  }, [history, dispatch])

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
        <p className={styles.text}>{specialistsDscription}</p></>}
    </header>
  )
}
