import React from "react";
import styles from "./HeaderBtn.module.css";
import { NavLink } from "react-router-dom";

const HeaderBtn = (props) => {
  return (
    <>
      <NavLink
        to={"/about"}
        style={(params) => {
          return { backgroundColor: params.isActive ? "#092133" : "" };
        }}
        className={styles.about}
      >
        О нас
      </NavLink>
      <NavLink
        to={"/roadmap"}
        style={(params) => {
          return { backgroundColor: params.isActive ? "#092133" : "" };
        }}
        className={styles.programms}
      >
        Программа курса
      </NavLink>

      <NavLink
        to={"/faq"}
        style={(params) => {
          return { backgroundColor: params.isActive ? "#092133" : "" };
        }}
        className={styles.faq}
      >
        FAQ
      </NavLink>
      <NavLink
        to={"/contacts"}
        style={(params) => {
          return { backgroundColor: params.isActive ? "#092133" : "" };
        }}
        className={styles.contacts}
      >
        Контакты
      </NavLink>
    </>
  );
};

export default React.memo(HeaderBtn);
