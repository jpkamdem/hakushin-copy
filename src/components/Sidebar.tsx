import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import logo from "../assets/hakushin_logo.svg";
import homeLogo from "../assets/CommonTabIcon.webp";
import burgerMenu from "../assets/menu.svg";
import { useState } from "react";

export default function Sidebar() {
  const [toggleView, setToggleView] = useState(false);
  function toggleAside() {
    setToggleView(!toggleView);
  }
  return (
    <>
      <aside>
        <div className={styles["logo-container"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="" />
          </Link>
          <p>Hakush.in</p>
        </div>
        <ul className={`${styles.navlink} ${toggleView ? styles.show : ""}`}>
          <Link to="/">
            <li>
              <img className={styles["nav-logo"]} src={homeLogo} alt="" />
              Home
            </li>
          </Link>
        </ul>
        <img
          onClick={toggleAside}
          className={styles["burger-menu"]}
          src={burgerMenu}
          alt=""
        />
      </aside>
    </>
  );
}
