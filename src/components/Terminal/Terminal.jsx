import React from "react";
import EntryTime from "./EntryTime/EntryTime";
import styles from "./Terminal.module.css";
// import logo from "./../../assets/logo2.png";
import TypeCommand from "./TypeCommand/TypeCommand";
import ConditionalRendering from "./СonditionalRendering/СonditionalRendering";

const Terminal = (props) => {
  return (
    <>
      <div className={styles.terminal}>
        <div className={styles.termcontent}>
          <div className={styles.greeting}>
            {" > "}D/Welcome to/Programming school
            <div className={styles.logotitle}>Cyber Ware</div>
            {/* <img className={styles.logo} src={logo} alt="logo" /> */}
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
