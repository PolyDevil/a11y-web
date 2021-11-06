import { VFC, useCallback, useState } from "react";
import styles from "./styles.module.scss";

interface Item {
  id: number;
  category: string;
  link: string;
  image: string;
  title: string;
  date: string;
  description: string;
}

interface Props {
  items: Item[];
}

const List: VFC<Props> = ({ items = [] }) => (
  <ul className={styles.list} role="list">
    {items.map((e) => (
      <li key={e.id} className={styles.item}>
        <article className={styles.card}>
          <div className={styles.imageBox} aria-hidden="true">
            <img className={styles.image} src={e.image} />
          </div>

          <header className={styles.header}>
            <h3 className={styles.subtitle}>{e.title}</h3>
            <p className={styles.description}>{e.description}</p>
          </header>

          <footer className={styles.footer}>
            <div className={styles.timeframe}>{e.date}</div>
            <a
              className={styles.action}
              href={e.link}
              aria-label={`купить билет на ${e.title}`}
            >
              купить билет
            </a>
          </footer>
        </article>
      </li>
    ))}
  </ul>
);

export default List;
