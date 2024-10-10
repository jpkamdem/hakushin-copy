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
      <aside className={styles.aside}>
        <div className={styles["logo-container"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Hakushin icon" />
          </Link>
        </div>

        <ul className={`${styles.navlink} ${isOpen ? styles.show : ""}`}>
          <Link to="/">
            <img className={styles["nav-logo"]} src={homeLogo} alt="" />
            Home
          </Link>
        </ul>
      </aside>
    </>
  );
}
