import { NavLink } from "react-router";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/pets">Mascotas</NavLink>
      <NavLink to="/store">Tienda</NavLink>
    </nav>
  );
}
