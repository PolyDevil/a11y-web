import { VFC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Subscribe: VFC<Props> = ({ className }) => (
  <div className={cn(className)}>
    <h2 className={styles.title}>Подписка на новости</h2>

    <form className={styles.form}>
      <label className={styles.email}>
        <input
          type="email"
          className={styles.input}
          placeholder="Ваш емайл..."
        />
      </label>

      <label className={styles.agreement}>
        <input className={styles.checkbox} type="checkbox" />
        <span className={styles.checkboxText}>
          Подтверждаю свое согласие на обработку персональных данных
        </span>
      </label>

      <button className={styles.submit}>Подписаться</button>
    </form>
  </div>
);

export default Subscribe;
