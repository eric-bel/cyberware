import React from "react";
import styles from "./HeaderBtnInTerminal.module.css";

const HeaderBtn = (props) => {
  return (
    <>
      <input type="button" value="О нас" className={styles.about}></input>
      <input
        type="button"
        value="Программа курса"
        className={styles.programms}
      ></input>
      <input type="button" value="FAQ" className={styles.faq}></input>
      <input type="button" value="Контакты" className={styles.contacts}></input>
      {/* <div className={styles.programms}>Программа курса</div>
      <div className={styles.faq}>FAQ</div>
      <div className={styles.contacts}>Контакты</div> */}
    </>
  );
};

export default React.memo(HeaderBtn);
