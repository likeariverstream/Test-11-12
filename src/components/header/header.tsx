import React from "react";
import styles from './header.module.css';
import { useLocation, useHistory } from "react-router";
import { Associate } from "../associate/associate";
import { routes } from "../../utils/constants";
import { logoutUser } from "../../store/reducers/register";
import { useDispatch } from "../../utils/hooks";
import { headerDescription } from "../../utils/constants";

export const Header = () => {
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
        {!main && <button className={styles.button}
          style={{
            margin: 0,
            marginBottom: 'auto'
          }} onClick={handleBack}>Назад</button>}
        {!main && <Associate />}
        <button className={styles.button} style={!main ? { marginBottom: 'auto' } : undefined}
          onClick={handleClose}>Выход</button></div>
      {main && <><h3 className={styles.heading}>Наша команда</h3>
        <p className={styles.text}>{headerDescription} </p></>}
    </header>
  )
}
