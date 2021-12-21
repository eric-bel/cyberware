import React from "react";
import { useState } from "react";
import About from "./About/About";
import styles from "./СonditionalRendering.module.css";

const СonditionalRendering = (props) => {
  const [state, setState] = useState({ inputValue: "", result: [] });
  

  const nandlePress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (state.inputValue.toLowerCase() === "about") {
        const res = [...state.result];
        res.push(<About />);
        setState((prev) => ({
          result: res,
          inputValue: "",
        }));
      }
      if (state.inputValue.toLowerCase() === "bla") {
        const res = [...state.result];
        res.push("bla bla bla bla");
        setState((prev) => ({
          result: res,
          inputValue: "",
        }));
      }
    }
  };

  const showInputValue = (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      inputValue: e.target.value,
    }));
  };

  return (
    <>
      {state.result && state.result.length !== 0 && state.result.map((i) => <p>{i}</p>)}
      <form className={styles.form}>
        <label className={styles.label}> {"> "}Командная строка $ :</label>
        <input
          className={styles.inputgetcommand}
          name="getcommand"
          type="text"
          autoFocus={false}
          autoComplete="off"
          value={state.inputValue}
          onChange={showInputValue}
          onKeyDown={nandlePress}
        />
      </form>
    </>
  );
};

export default React.memo(СonditionalRendering);
