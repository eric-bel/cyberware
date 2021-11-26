import React from "react";
import Typical from "react-typical";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <>
      {" "}
      <div className={styles.about}></div>
      <Typical
        steps={[
          " >    Мы - онлайн школа программирования, обучаем программированию на языках Javascript, Node.js и вёрстке на HTML5 и CSS3. Предоставляем программу обучения, план вашего становления специалистом в IT сфере. IT escorts - это заботливое сопрождение вашего процесса  обучения. С нашей помощью вы можете изучать эти технологии и применять на практике.",
          500,
        ]}
        loop={1}
        wrapper="p"
      />
    </>
  );
};

export default React.memo(About);
