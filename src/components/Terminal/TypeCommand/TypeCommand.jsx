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
        {">"} Или наберите <span className={styles.span}> "help"</span> и нажмите
        Enter чтобы увидеть доступные команды.{" "}
      </div>
    </>
  );
};

export default React.memo(TypeCommand);
