import React from "react";
import styles from "./Social.module.css";
import { IconContext } from "react-icons";
import { RiTelegramLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import logo from "../../../../../assets/logo.png";

const Social = () => {
  return (
    <>
      <div className={styles.social}>
        <IconContext.Provider value={{ size: "3em" }}>
          <p className={styles.icons}>
            <a target="_blank" rel="noreferrer" href="https://t.me/cyberwares">
              <RiTelegramLine className={styles.telegram} />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/cyber__ware/?utm_medium=copy_link"
            >
              <RiInstagramLine className={styles.instagram} />
            </a>
            <img className={styles.logo} src={logo} alt="logo" />
          </p>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Social;
