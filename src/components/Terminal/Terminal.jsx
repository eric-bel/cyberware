import React from "react";
import EntryTime from "./EntryTime/EntryTime";
import styles from "./Terminal.module.css";

const Terminal = (props) => {
  return (
    <>
      <div className={styles.terminal}>
        <div className={styles.termcontent}>
          <p className={styles.greeting}>
            Добро пожаловать на сайт онлайн школы программирования IT Escorts
          </p>
          <EntryTime />
        </div>
      </div>
    </>
  );
};

export default React.memo(Terminal);
