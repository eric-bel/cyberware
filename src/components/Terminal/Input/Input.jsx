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
        <form>
          <label className={styles.label}> {"> "}введите комманду $</label>

          <input
            className={styles.getcommand}
            name="getcommand"
            type="text"
            list="list"
            value={state}
            placeholder="и нажмите Enter"
            onChange={showValue}
          />
        </form>
      </div>
    </>
  );
};

export default React.memo(Input);
