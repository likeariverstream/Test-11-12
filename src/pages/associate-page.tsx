import React from "react";
import styles from './associate-page.module.css';
import { Header } from "../components/header/header";
import { description, phone } from "../utils/constants";
import { useSelector } from "../utils/hooks";
import { useParams } from "react-router";

export const AssociatePage = () => {

  const { data } = useSelector(store => store.users);
  const { id } = useParams<{ id: string }>();
  const user = data.find(i => i.id === Number(id));

  return (
    <>
      <Header />
      <main className={styles.main}>
        <p className={styles.description}>
          {description(`${user?.first_name} ${user?.last_name}`)}</p>
        <section className={styles.contacts}>
          <div className={styles.box}>
            <button className={styles.phone}></button>
            <p className={styles.text}>{phone}
            </p></div>
          <div className={styles.box}>
            <button className={styles.mail}></button>
            <p className={styles.text}>{user?.email}
            </p></div>
        </section>
      </main>
    </>
  )
}
