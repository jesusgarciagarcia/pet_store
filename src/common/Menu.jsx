import { NavLink } from "react-router";

export default function Menu(){
 return <nav>
        <ul>
          <NavLink to="/" end>
        Inicio
      </NavLink>
      <NavLink to="/pets">Mascotas</NavLink>
          <li>Tienda</li>
        </ul>
      </nav>
}
