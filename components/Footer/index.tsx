import { VFC } from "react";
import styles from "./styles.module.scss";
import Sitemap from "./Sitemap";
import Social from "./Social";
import Subscribe from "./Subscribe";

const Footer: VFC = () => (
  <footer className={styles.root}>
    <div className={styles.content}>
      <Sitemap className={styles.sitemap} />
      <Social className={styles.social} />
      <Subscribe className={styles.subscribe} />
    </div>
  </footer>
);

export default Footer;
