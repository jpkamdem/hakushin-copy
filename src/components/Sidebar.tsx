import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import logo from "../assets/hakushin_logo.svg";
import homeLogo from "../assets/CommonTabIcon.webp";
import burgerMenu from "../assets/menu.svg";

export default function Sidebar() {
  return (
    <>
      <aside>
        <div className={styles["logo-container"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="" />
          </Link>
          <p>Hakush.in</p>
        </div>
        <ul className={styles.navlink}>
          <Link to="/">
            <li>
              <img className={styles["nav-logo"]} src={homeLogo} alt="" />
              Home
            </li>
          </Link>
        </ul>
        <img className={styles["burger-menu"]} src={burgerMenu} alt="" />
      </aside>
    </>
  );
}
