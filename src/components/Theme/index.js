import React from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import useDarkMode from '@fisch0920/use-dark-mode';
import Icon from "../Icon";

const Theme = ({ className, visibleSidebar }) => {
  const [isDarkMode, setDarkMode] = useDarkMode(false);

  return (
    <label
      className={cn(className, styles.theme, { [styles.wide]: visibleSidebar })}
    >
      <input
        className={styles.input}
        checked={isDarkMode}
        onChange={() => setDarkMode(!isDarkMode)}
        type="checkbox"
      />
      <span className={styles.inner}>
        <span className={styles.box}>
          <Icon name="sun" size="24" />
          Light
        </span>
        <span className={styles.box}>
          <Icon name="moon" size="24" />
          Dark
        </span>
      </span>
    </label>
  );
};

export default Theme;
