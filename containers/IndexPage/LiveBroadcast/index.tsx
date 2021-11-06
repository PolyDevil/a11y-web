import { VFC } from "react";
import styles from "./styles.module.scss";

const LiveBroadcast: VFC = () => (
  <section className={styles.root}>
    <h2 className={styles.title}>Онлайн-трансляции</h2>

    <a href="#live-tour" className="skip-link-static">
      Пропустить фрейм с видео
    </a>

    <iframe
      className={styles.iframe}
      src="https://www.youtube.com/embed/5qRR-5H1XgU"
      title="Ай Вейвей: движение к общечеловеческому"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </section>
);

export default LiveBroadcast;
