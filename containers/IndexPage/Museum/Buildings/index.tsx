import { VFC } from "react";
import styles from "./styles.module.scss";
import { list } from "./data";

const History: VFC = () => (
  <ul className={styles.list} role="list">
    {list.map((e) => (
      <li key={e.id} className={styles.item}>
        <article className={styles.card}>
          <header className={styles.header}>
            <div className={styles.image}>{e.image}</div>

            <h3 className={styles.title}>{e.title}</h3>
          </header>

          <address className={styles.address}>{e.address}</address>

          <footer className={styles.footer}>
            <a className={styles.more} href={e.link}>
              {e.title}
            </a>
          </footer>
        </article>
      </li>
    ))}
  </ul>
);

export default History;
