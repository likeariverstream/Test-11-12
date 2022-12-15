import React from "react";
import styles from './main-page.module.css';
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import { useSelector } from "../utils/hooks";
import { Redirect } from "react-router";
import { routes } from "../utils/constants";

export const MainPage = () => {

  const { isRegistred } = useSelector(store => store.register)

  if (!isRegistred) {
    return <Redirect to={routes.register} />
  }
  
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
