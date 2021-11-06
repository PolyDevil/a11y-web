import { VFC } from "react";
import TabsRC, { TabsProps, TabPane } from "rc-tabs";
import styles from "./styles.module.scss";

const Tabs: VFC<TabsProps> = (props) => (
  <TabsRC {...props} className={styles.tabs} />
);

export { TabPane } from "rc-tabs";
export default Tabs;
