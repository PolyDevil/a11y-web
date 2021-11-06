import { VFC } from "react";
import DialogRC, { DialogProps } from "rc-dialog";
import "rc-dialog/assets/index.css";
import styles from "./styles.module.scss";

const Dialog: VFC<DialogProps> = (props) => (
  <DialogRC {...props} className={styles.dialog} />
);

export default Dialog;
