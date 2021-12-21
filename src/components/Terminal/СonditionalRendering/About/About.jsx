import Texty from "rc-texty";
import React from "react";
// import Typical from "react-typical";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <>
      {" "}
      <div className={styles.about}></div>
      <Texty>
        Мы - онлайн школа программирования, обучаем программированию на языках
        Javascript, Node.js и вёрстке на HTML5 и CSS3. Используем индивидуальный
        подход к каждому студенту.
        {/* Предоставляем программу
        обучения, план вашего становления специалистом в IT сфере. IT escorts -
        это заботливое сопрождение вашего процесса обучения. С нашей помощью вы
        можете изучать эти технологии и применять на практике. */}
      </Texty>
      {/* <hr /> */}
    </>
  );
};

export default React.memo(About);
