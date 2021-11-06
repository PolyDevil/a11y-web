import { VFC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Sitemap: VFC<Props> = ({ className }) => (
  <div className={cn(className)}>
    <h2 className={styles.title}>Полезные ссылки</h2>

    <nav>
      <ul className={styles.list} role="list">
        <li>
          <a
            className={styles.link}
            href="https://pushkinmuseum.art/museum4all/index.php?lang=ru"
          >
            Посетителям с ограниченными возможностями
          </a>
        </li>

        <li>
          <a
            className={styles.link}
            href="https://pushkinmuseum.art/visitors/tickets/index.php?lang=ru"
          >
            Билеты и льготы
          </a>
        </li>

        <li>
          <a
            className={styles.link}
            href="https://pushkinmuseum.art/museum/documents/corruption/index.php?lang=ru"
          >
            Противодействие коррупции
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sitemap;
