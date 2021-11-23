import React from "react";
import styles from "./TypeCommand.module.css";

const TypeCommand = () => {
  return (
    <>
      <div className={styles.typecommand}>
        {">"} Наберите <span className={styles.span}> "help"</span> чтобы
        увидеть доступные команды.{" "}
        <span className={styles.or}>
          Или пользуйтесь кнопками выше.
        </span>
      </div>
    </>
  );
};

export default React.memo(TypeCommand);
