import Menu from './Menu'
import styles from "./Header.module.css";

export default function Header () {
  return (
    <header className={styles.header}>
      <h1>Pet Store</h1>
        <div className={styles.userIcon} id="user-icon">
            <img src="user-icon.png" alt="Usuario"/>
        </div>
      <Menu/>
    </header>
  );
}
