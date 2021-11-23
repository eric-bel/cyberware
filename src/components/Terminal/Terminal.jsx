import React from "react";
import EntryTime from "./EntryTime/EntryTime";
import styles from "./Terminal.module.css";
import logo from "./../../assets/logo3.png";
import About from "./About/About";
import TypeCommand from "./TypeCommand/TypeCommand";
import Input from "./Input/Input";
// import HeaderBtnInTerminal from "./HeaderInTerminal/HeaderBtn/HeaderBtnInTerminal";

const Terminal = (props) => {
  return (
    <>
      <div className={styles.terminal}>
        <div className={styles.termcontent}>
          {/* <HeaderBtnInTerminal /> */}
          <div className={styles.greeting}>
            {" > "}D/Welcome to/Programming school
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.logotitle}>Terminal</div>
          </div>
          <EntryTime />
          <hr />
          <TypeCommand />
          <About />
          <Input />
        </div>{" "}
      </div>
    </>
  );
};

export default React.memo(Terminal);
