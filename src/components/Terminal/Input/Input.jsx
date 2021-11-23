import React from "react";
import { useState } from "react";
import styles from "./Input.module.css";

const Input = () => {
  const [state, setState] = useState("");
  const showInputValue = (e) => {
    setState(e.target.value);
  };
  // useEffect(() => {}, [state]);
  return (
    <>
      <div className={styles.inputwrap}>
        <form className={styles.form}>
          <label className={styles.label}> {"> "}Командная строка $ :</label>

          <div className={styles.cursor}>
            <input
              className={styles.inputgetcommand}
              name="getcommand"
              type="text"
              autoFocus={false}
              value={state}
              onChange={showInputValue}
              autoComplete="off"
            />
            <i></i>
          </div>
        </form>
      </div>
    </>
  );
};

export default React.memo(Input);
