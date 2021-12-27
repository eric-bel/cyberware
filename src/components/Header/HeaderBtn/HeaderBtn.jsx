import React from "react";
import styles from "./HeaderBtn.module.css";
import { NavLink } from "react-router-dom";

const HeaderBtn = (props) => {
  return (
    <>
      <NavLink
        to={"/home"}
        style={(params) => {
          return { backgroundColor: params.isActive ? "#092133" : "" };
        }}
        className={styles.home}
      >
        Главное
      </NavLink>
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
