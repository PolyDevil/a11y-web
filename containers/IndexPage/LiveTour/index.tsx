import { VFC } from "react";
import styles from "./styles.module.scss";

const LiveTour: VFC = () => (
  <section className={styles.root} id="live-tour">
    <h2 className={styles.title}>Экскурсии и лекции в прямом эфире</h2>

    <p className={styles.description}>
      С 1 июля вы можете присоединиться к нашим виртуальным мероприятиям —
      экскурсиям и лекциям для взрослых и детей, оплатив участие на сайте.
      Встречи будут проходить в прямом эфире на платформе Zoom; предусмотрен
      формат живого общения с возможностью задавать вопросы экскурсоводу
      (лектору).{" "}
      <a href="https://pushkinmuseum.art/media/virtual/index.php?lang=ru#excurs">
        Подробнее.
      </a>
    </p>

    <p className={styles.description}>
      Мы будем благодарны за любое{" "}
      <a href="https://pushkinmuseum.art/museum/support_us/donate_online/index.php?lang=ru#donate_form">
        пожертвование
      </a>
      . Все поступившие средства будут направлены на организацию онлайн-проектов
      для наших посетителей.
    </p>
  </section>
);

export default LiveTour;
