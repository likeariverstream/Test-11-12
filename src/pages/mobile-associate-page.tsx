import React from "react";
import styles from './mobile-associate-page.module.css';
import { MobileHeader } from "../components/mobile-header/mobile-header";
import { useSelector } from "../utils/hooks";
import { useParams } from "react-router";
import { description } from "../utils/constants";
import { phone } from "../utils/constants";

export const MobileAssociatePage = () => {
  const { data } = useSelector(store => store.users);
  const { id } = useParams<{ id: string }>();
  const user = data.find(i => i.id === Number(id));

  return (
    <>
      <MobileHeader />
      <main className={styles.main}>

        <section className={styles.contacts}>
          <div className={styles.box}>
            <button className={styles.phone}></button>
            <p className={styles.text}>{phone}
            </p></div>
          <div className={styles.box}>
            <button className={styles.mail}></button>
            <p className={styles.text}>{user?.email}
            </p></div>
          <p className={styles.description}>{description(`${user?.first_name} ${user?.last_name}`)}</p>
        </section>
      </main>
    </>
  )
}
