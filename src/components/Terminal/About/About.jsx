import React from "react";
import Typical from "react-typical";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <>
      {" "}
      <div className={styles.about}></div>
      <div>
        {" "}
        Наберите <div style={{ color: "red" }}>"Red"</div>
      </div>
      <Typical
        steps={[
          " => {О нас}",
          2500,
          " =>    Мы - онлайн школа программирования, мы обучаем программированию, а именно технологиям: HTML5, CSS3, Javascript и Node.js. Мы предоставляем программу обучения, план вашего становления программистом. IT escorts - это заботливое сопрождение вашего процесса  изучения программирования и становления программистом. С нашей помощью вы сможете изучить эти технологии и применять на практике. Нажмите Enter для дальнейшего взаимодействия",
          500,
        ]}
        loop={1}
        wrapper="p"
      />
    </>
  );
};

export default React.memo(About);
