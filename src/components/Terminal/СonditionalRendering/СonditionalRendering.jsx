import React from "react";
import { useState } from "react";
import About from "./About/About";
import styles from "./СonditionalRendering.module.css";

const СonditionalRendering = (props) => {
  const [stateInputValue, setStateInputValue] = useState("");
  const [wasEnterPressed, setEnterPressed] = useState(false);

  return (
    <>
      <form className={styles.form}>
        <label className={styles.label}> {"> "}Командная строка $ :</label>

        <input
          className={styles.inputgetcommand}
          name="getcommand"
          type="text"
          autoFocus={false}
          autoComplete="off"
          value={stateInputValue}
          onChange={(e) => {
            e.preventDefault();
            setStateInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setEnterPressed(true);
            }
            if (wasEnterPressed) setEnterPressed(false);
          }}
        />
      </form>
      {stateInputValue.toLowerCase() === "about" &&
        wasEnterPressed &&
        "about about about about about"}
      {stateInputValue.toLowerCase() === "bla" &&
        wasEnterPressed &&
        "bla bla bla "}
    </>
  );
};

export default React.memo(СonditionalRendering);
