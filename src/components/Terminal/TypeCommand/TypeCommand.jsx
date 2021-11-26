import React from "react";
import styles from "./TypeCommand.module.css";

const TypeCommand = () => {
  return (
    <>
      <div className={styles.or}>
        {" "}
        {"> "} Для навигации пользуйтесь кнопками выше.
      </div>
      <div className={styles.typecommand}>
        {">"} Или наберите в командной строке одну из следующих доступных
        комманд <span className={styles.span}> "about",</span>
        <span className={styles.span}> "programm",</span>
        <span className={styles.span}> "faq",</span>
        <span className={styles.span}> "contacts",</span> и нажмите Enter.{" "}
      </div>
    </>
  );
};

export default React.memo(TypeCommand);
