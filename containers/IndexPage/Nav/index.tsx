import { VFC } from "react";
import styles from "./styles.module.scss";

const Nav: VFC = () => (
  <nav className={styles.root}>
    <ul className={styles.list} role="list">
      <li className={styles.item}>
        <a
          className={styles.link}
          href="https://tickets.pushkinmuseum.art/event/C0DA74F6055930ED0420849E5DAACFE46216833D/2021-11-06"
        >
          Купить билет
        </a>
      </li>

      <li className={styles.item}>
        <a
          className={styles.link}
          href="https://pushkinmuseum.art/museum/support_us/friends/index.php?lang=ru"
        >
          Стать другом
        </a>
      </li>

      <li className={styles.item}>
        <a
          className={styles.link}
          href="https://pushkinmuseum.art/media/shopping/index.php?lang=ru"
        >
          Книги и сувениры
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
