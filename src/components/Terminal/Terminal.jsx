import { Routes, Route} from "react-router-dom";
import React from "react";
import EntryTime from "./EntryTime/EntryTime";
import styles from "./Terminal.module.css";
// import logo from "./../../assets/logo2.png";
import TypeCommand from "./TypeCommand/TypeCommand";
import ConditionalRendering from "./СonditionalRendering/СonditionalRendering";
import About from "./СonditionalRendering/About/About";
import Roadmap from "./СonditionalRendering/Roadmap/Roadmap";
import HeaderBtn from "../Header/HeaderBtn/HeaderBtn";

const Terminal = (props) => {
  return (
    <>
      <HeaderBtn />
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
          <Routes>
            <Route path={"/about"} element={<About />} />
            <Route path={"/roadmap"} element={<Roadmap />} />
            <Route path={"/faq"} element={<div>faq faq faq faq faq</div>} />
          </Routes>
        </div>{" "}
      </div>
    </>
  );
};

export default React.memo(Terminal);
