import { VFC, useCallback, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import List from "./List";
import { list } from "./data";

const Events: VFC = () => {
  const [category, setCategory] = useState("all");
  const selectCategory = useCallback(
    (name: string) => () => setCategory(name),
    []
  );

  const items = useMemo(() => {
    if (["today", "tomorrow"].includes(category)) {
      return list.filter((e) => e.category === category);
    }

    return list;
  }, [category]);

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <h2 id="events-header" className={styles.title}>
          Выставки и события
        </h2>

        <ul role="list" className={styles.tabs} aria-labelledby="events-header">
          <li className={styles.tab}>
            <Link href="/#all">
              <a
                rel="tag"
                className={styles.link}
                onClick={selectCategory("all")}
                {...(category === "all" ? { ariaCurrent: "page" } : {})}
              >
                Все
              </a>
            </Link>
          </li>

          <li className={styles.tab}>
            <Link href="/#today">
              <a
                rel="tag"
                className={styles.link}
                onClick={selectCategory("today")}
                {...(category === "today" ? { ariaCurrent: "page" } : {})}
              >
                Сегодня
              </a>
            </Link>
          </li>

          <li className={styles.tab}>
            <Link href="/#tomorrow">
              <a
                rel="tag"
                className={styles.link}
                onClick={selectCategory("tomorrow")}
                {...(category === "tomorrow" ? { ariaCurrent: "page" } : {})}
              >
                Завтра
              </a>
            </Link>
          </li>
        </ul>
      </header>

      <List items={items} />
    </section>
  );
};

export default Events;
