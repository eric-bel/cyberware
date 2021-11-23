import React from "react";
import { useEffect, useState } from "react";
import styles from "./Input.module.css";

const Input = () => {
  const [state, setState] = useState("");
  const showValue = (e) => {
    setState(e.target.value);
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <div className={styles.inputwrap}>
        <form className={styles.form}>
          <label className={styles.label}> {"> "}введите комманду $</label>

          <div className={styles.cursor}>
            <input
              className={styles.getcommand}
              name="getcommand"
              type="text"
              // list="list"
              autoFocus={false}
              value={state}
              onChange={showValue}
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
