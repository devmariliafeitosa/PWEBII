import { Link, NavLink } from "react-router";
import style from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className="container">
      <ul className="menu">
        <li>
          <NavLink to="/" className={style.linkNav} style={({isActive}) => {
            color: isActive ? 'var(--color)' : '#2c0108'
          }}> Home 
          </NavLink>
        </li>

        <li>
          <NavLink to="/contato" className={style.linkNav} style={({isActive}) => {
            color: isActive ? 'var(--color)' : '#2c0108'
          }}> Contato 
          </NavLink>
        </li>

        <li>
          <NavLink to="/sobre" className={style.linkNav} style={({isActive}) => {
            color: isActive ? 'var(--color)' : '#2c0108'
          }}> Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
