import { VFC } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Events from "./Events";
import LiveBroadcast from "./LiveBroadcast";
import LiveTour from "./LiveTour";
import Museum from "./Museum";
import styles from "./styles.module.scss";

const IndexPage: VFC = () => (
  <>
    <small className="sr-only">
      <em>Дисклеймер:</em>
      все внешние ссылки (не якорные) ведут на официальный сайт пушкинского
      музея, поэтому на них лучше не кликать. Сабмит формы также ведет на оф.
      сайт.
    </small>

    <h1
      className="sr-only"
      title="Пропущенный заголовок первого уровня"
      id="maincontent"
    >
      Государственный музей изобразительных искусств им. А.С. Пушкина
    </h1>

    <div className={styles.nav}>
      <Nav />
    </div>

    <div className={styles.root}>
      <Hero />
      <Events />
      <Museum />
      <LiveBroadcast />
      <LiveTour />
    </div>
  </>
);

export default IndexPage;
