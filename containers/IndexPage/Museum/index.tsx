import { VFC } from "react";
import Tabs, { TabPane } from "../../../components/Tabs";
import styles from "./styles.module.scss";
import Buildings from "./Buildings";
import History from "./History";

const Museum: VFC = () => (
  <section className={styles.root}>
    <h2 className={styles.title}>Музей</h2>

    <Tabs className={styles.tabs}>
      <TabPane tab="Здания" key="buildings">
        <Buildings />
      </TabPane>

      <TabPane tab="История" key="history">
        <History />
      </TabPane>
    </Tabs>
  </section>
);

export default Museum;
