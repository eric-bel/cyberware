import React from "react";
import EntryTime from "./EntryTime/EntryTime";
import styles from "./Terminal.module.css";
import logo from "./../../assets/logo3.png";
import TypeCommand from "./TypeCommand/TypeCommand";
import ConditionalRendering from "./СonditionalRendering/СonditionalRendering"

const Terminal = (props) => {
  return (
    <>
      <div className={styles.terminal}>
        <div className={styles.termcontent}>
          <div className={styles.greeting}>
            {" > "}D/Welcome to/Programming school
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.logotitle}>Terminal</div>
          </div>
          <EntryTime />
          <hr />
          <TypeCommand />
          <ConditionalRendering />
        </div>{" "}
      </div>
    </>
  );
};

export default React.memo(Terminal);
