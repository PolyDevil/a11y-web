import React, { FC } from "react";
import cn from "classnames";

import classes from "./styles.module.scss";

interface Props {
  id?: string;
  className?: string;
}

const Reel: FC<Props> = ({ id, className, children }) => (
  <ul className={cn(classes.root, className)} role="list" id={id}>
    {children}
  </ul>
);

export default Reel;
