import React from "react";
import styles from "./Contacts.module.css";
import Social from "./Social/Social";

const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        Напишите нам в соц. сетях или на почту{" "}
        <span className={styles.span}>cyberware.ed@gmail.com</span>, мы открыты
        для обсуждения любых вопросов.{" "}
      </div>
      <Social />
    </>
  );
};

export default Contacts;
