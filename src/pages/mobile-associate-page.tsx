import React from "react";
import styles from './mobile-associate-page.module.css';
import { MobileHeader } from "../components/mobile-header/mobile-header";

export const MobileAssociatePage = () => {
  const description = `Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты. В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно". Помимо разнообразных проектов для клиентов финансового сектора, Королев ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.`
  const phone = '+7 (954) 333-44-55';
  const mail = 'sykfafkar@gmail.com'
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
            <p className={styles.text}>{mail}
            </p></div>
            <p className={styles.description}>{description}</p>
        </section>
      </main>
    </>
  )
}
