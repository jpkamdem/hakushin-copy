import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/hakushin_logo.svg";
import burgerMenu from "../assets/menu.svg";

interface Props {
  isOpen: boolean;
  setToggleView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isOpen, setToggleView }: Props) {
  function handleView() {
    setToggleView(!isOpen);
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">
          <img className={styles["nav-logo-container"]} src={logo} alt="" />
        </Link>
        <p>Hakush.in</p>
        <img
          onClick={handleView}
          className={styles["burger-menu"]}
          src={burgerMenu}
          alt=""
        />
      </nav>
    </>
  );
}
