import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// @ts-ignore
import logo from '../css/img/csanad_logo.jpg'

export default function Navbar() {

    return (
        <nav className="navbar fixed-top navbar-expand-md">
            <div className="container">
                <ul>
                    <CustomLink className="nav-link" to="/opening_hours">Nyitvatartás</CustomLink>
                </ul>
                <Link to="/" className="navbar-brand mx-auto order-0">
                    <img src={logo} alt="Sill logo"/>
                </Link>
                <ul>
                    <CustomLink className="nav-link mx-6" to="/order">Rendelés</CustomLink>
                </ul>
            </div>
        </nav>
    )
}

// @ts-ignore
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}