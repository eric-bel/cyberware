import React from "react";
import { useState } from "react";
import About from "./About/About";
// import Input from "./Input/Input";
import styles from "./СonditionalRendering.module.css";

const СonditionalRendering = (props) => {
  const [stateInputValue, setStateInputValue] = useState("");
  const [wasEnterPressed, setEnterPressed] = useState(false);
  const showInputValue = (e) => {
    setStateInputValue(e.target.value);
  };

  return (
    <>
      {/* <Input /> */}
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setEnterPressed(true);
              return true;
            } else {
              console.log("Else");
              return false;
            }
          }}
        />
      </form>
      {stateInputValue === "text" && 1 ? "text" : ""}
      {stateInputValue === "text11" && 1 ? "text11" : ""}
      {stateInputValue.toLowerCase() === "about" && wasEnterPressed && (
        <About />
      )}
    </>
  );
};

export default React.memo(СonditionalRendering);
