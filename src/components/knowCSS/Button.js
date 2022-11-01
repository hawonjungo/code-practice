import clsx from "clsx";

import styles from "./Button.module.css";

function Button({ primary, secondary }) {
  const classes = clsx(
    styles.btn,
    { [styles.primary]: primary },
    { [styles.secondary]: secondary }
  );
  return <button className={classes}>Click me!</button>;
}

export default Button;

// return only one button but can use as multiple time
