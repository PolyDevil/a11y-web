import { VFC } from "react";
import Reel from "../../../components/Reel";
import styles from "./styles.module.scss";
import { list } from "./data";

const Hero: VFC = () => (
  <Reel className={styles.root}>
    {list.map((item) => (
      <li key={item.id} className={styles.item}>
        <img src={item.image} aria-hidden="true" className={styles.image} />
        <h3 className={styles.title}>
          <a className={styles.link} href={item.link}>
            {item.title}
          </a>
        </h3>
      </li>
    ))}
  </Reel>
);

export default Hero;
