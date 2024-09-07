import styles from "./header.module.css";
import logo from "../../../public/navbar-icon.svg";
import website from "../../../public/website-icon.svg";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo image" />
        <p>black IN dashboard</p>
      </div>

      <button className={styles.navBtn}>
        <img src={website} alt="website btn" />
        go to website{" "}
      </button>
    </header>
  );
}

export default Header;
