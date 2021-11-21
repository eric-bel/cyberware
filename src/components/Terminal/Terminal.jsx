import React from "react";
import EntryTime from "./EntryTime/EntryTime";
import styles from "./Terminal.module.css";
import logo from "./../../assets/logo3.png";
import About from "./About/About";
// import TypeCommand from "./TypeCommand/TypeCommand";

const Terminal = (props) => {
  return (
    <>
      <div className={styles.terminal}>
        <div className={styles.termcontent}>
          <div className={styles.greeting}>
            {/* Добро пожаловать на сайт онлайн школы программирования{" "} */}
            {" > "}D/Welcome to/sProgramming school
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.logotitle}>IT Escorts.</div>
          </div>
          <EntryTime />
          <hr/>
          <About />
          {/* <TypeCommand /> */}
        </div>
      </div>
    </>
  );
};

export default React.memo(Terminal);
