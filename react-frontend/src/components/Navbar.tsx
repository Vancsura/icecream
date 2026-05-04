import { Link, useMatch, useResolvedPath } from "react-router-dom";
// @ts-ignore
import logo from "../css/img/csanad_logo.jpg";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`navbar fixed-top ${menuOpen ? "open" : ""}`}>
      <Link to="/" className="navbar-brand mx-auto order-0">
        <img src={logo} alt="Sill logo" />
      </Link>
      <div className="container">
        <ul>
          <a className="nav-link mx-6" href="#sill_baja">
            Baja
          </a>
           <a className="nav-link mx-6" href="#sill_csanad">
            Érsekcsanád
          </a>
        </ul>

        <ul>
          <CustomLink className="nav-link mx-6" to="">
            Dusnok
          </CustomLink>
          <CustomLink className="nav-link mx-6" to="">
            Vaskút
          </CustomLink>
        </ul>
      </div>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>
    </nav>
  );
}

// @ts-ignore
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
