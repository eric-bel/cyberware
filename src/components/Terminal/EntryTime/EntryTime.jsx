import React, { useEffect, useState } from "react";
import styles from "./EntryTime.module.css";

const date = new Date();

const EntryTime = () => {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className={styles.clock}>
        {" < "}Время входа:{"  "}
        {/* <div className={styles.currentdate}> {new Date().toLocaleString()}</div> */}
        <div className={styles.currentdate}>
          {new Date().toLocaleDateString()} {dateTime.hours}:{dateTime.minutes}:
          {dateTime.seconds}
          {""}
        </div>
      </div>
    </>
  );
};

export default React.memo(EntryTime);
