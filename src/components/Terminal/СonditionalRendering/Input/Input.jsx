import React from "react";
import { useState } from "react";
import styles from "./Input.module.css";

const Input = () => {
  const [stateInputValue, setStateInputValue] = useState("");
  // const [stateUserCommand, setUserCommand] = useState("");
  const showInputValue = (e) => {
    setStateInputValue(e.target.value);
  };
  // useEffect(() => {}, [state]);
  return (
    <>
      <div className={styles.inputwrap}>
        <form className={styles.form}>
          <label className={styles.label}> {"> "}Командная строка $ :</label>

          <input
            className={styles.inputgetcommand}
            name="getcommand"
            type="text"
            autoFocus={false}
            value={stateInputValue}
            onChange={showInputValue}
            autoComplete="off"
          />
        </form>
      </div>
    </>
  );
};

export default React.memo(Input);
