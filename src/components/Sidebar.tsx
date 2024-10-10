import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import logo from "../assets/hakushin_logo.svg";
import homeLogo from "../assets/CommonTabIcon.webp";

interface Props {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: Props) {
  return (
    <>
      <aside className={`${styles.aside} ${isOpen ? styles.show : ""}`}>
        <div className={styles["logo-container"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Hakushin icon" />
          </Link>
          <p>Hakush.in</p>
        </div>

        <ul className={styles.navlinks}>
          <Link to="/">
            <li className={styles["navlinks-item"]}>
              <img className={styles["nav-logo"]} src={homeLogo} alt="" />
              Home
            </li>
          </Link>
          <Link to="/">
            <li className={styles["navlinks-item"]}>
              <img className={styles["nav-logo"]} src={homeLogo} alt="" />
              Home
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
}
