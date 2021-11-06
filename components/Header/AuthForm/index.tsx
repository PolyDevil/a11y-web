import { VFC, useCallback } from "react";
import styles from "./styles.module.scss";

const AuthForm: VFC = () => {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Логин</span>
        <input name="login" className={styles.input} placeholder="username" />
      </label>

      <label className={styles.field}>
        <span>Пароль</span>
        <input name="password" type="password" className={styles.input} />
      </label>

      <button className={styles.submit}>Войти</button>
    </form>
  );
};

export default AuthForm;
