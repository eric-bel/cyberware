import styles from "./Faq.module.css";

function Faq() {
  return (
    <>
      <div className={styles.faq}>
        <h3 className={styles.headline}>Об обучении в вопросах и ответах:</h3>
        <details>
          <summary> Как долго длится обучение?</summary>
          <p className={styles.answer}>
            Т. к. мы придерживаемся индивдуального подхода, длительность
            обучения зависит от многих факторов. Например, сколько времени в
            день вы можете уделять обучению. Занимались ли вы раньше
            программированием, версткой и т. д. В среднем, ориентируемся на срок
            от полугода. Если вы уже частично владеете одной из технологий
            (Javascript, HTML5, CSS3), можно завершить обучение раньше.
          </p>
        </details>
        <details>
          <summary>
            {" "}
            Как производится оплата? Сразу за всё обучение или можно платить по
            раздельности?
          </summary>
          <p className={styles.answer}>
            {" "}
            Оплата производится за каждое занятие. Обычно студенты занимаются у
            нас по несколько раз в неделю. От 1 до 3 раз, по желанию можно и
            чаще.
          </p>
        </details>

        <div className={styles.ask}>
          <small>
            {" "}
            Задайте нам вопрос в разделе
            <span className={styles.span}> "Контакты"</span>
          </small>
        </div>
      </div>
    </>
  );
}

export default Faq;
