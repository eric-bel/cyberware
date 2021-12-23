import React from "react";
import styles from "./HeaderBtn.module.css";
import { NavLink } from "react-router-dom";

const HeaderBtn = (props) => {
  return (
    <>
      <NavLink to={"/about"} className={styles.about}>
        О нас
      </NavLink>
      <NavLink to={"/roadmap"} className={styles.programms}>
        Программа курса
      </NavLink>

      <NavLink to={"/faq"} className={styles.faq}>
        FAQ
      </NavLink>
      <NavLink to={"/contacts"} className={styles.contacts}>
        Контакты
      </NavLink>
    </>
  );
};

export default React.memo(HeaderBtn);
