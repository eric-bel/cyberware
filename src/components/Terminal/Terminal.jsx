import { Routes, Route } from "react-router-dom";
import React from "react";
// import EntryTime from "./EntryTime/EntryTime";
import styles from "./Terminal.module.css";
// import logo from "./../../assets/logo2.png";
import TypeCommand from "./TypeCommand/TypeCommand";
import ConditionalRendering from "./СonditionalRendering/СonditionalRendering";
import About from "./СonditionalRendering/About/About";
import Roadmap from "./СonditionalRendering/Roadmap/Roadmap";
import HeaderBtn from "../Header/HeaderBtn/HeaderBtn";
import Contacts from "./СonditionalRendering/Contacts/Contacts";
import Faq from "./СonditionalRendering/Faq/Faq";

const Terminal = (props) => {
  return (
    <>
      <HeaderBtn />
      <div className={styles.terminal}>
        <div className={styles.termcontent}>
          <div className={styles.greeting}>
            {" > "}Welcome to programming school
            <div className={styles.logotitle}>Cyber Ware test</div>
            {/* <img className={styles.logo} src={logo} alt="logo" /> */}
          </div>

          {/* <EntryTime /> */}
          <hr />
          <TypeCommand />
          <ConditionalRendering />
          <Routes>
            <Route path={"/about"} element={<About />} />
            <Route path={"/roadmap"} element={<Roadmap />} />
            <Route path={"/faq"} element={<Faq />} />
            <Route path={"/contacts"} element={<Contacts />} />
          </Routes>
        </div>{" "}
      </div>
    </>
  );
};

export default React.memo(Terminal);
