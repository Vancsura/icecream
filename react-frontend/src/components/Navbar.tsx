export default function Navbar() {

    return (
        <nav className="navbar fixed-top navbar-expand-md">

            <div className="container">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <a className="nav-link" href="/open">Nyitvatartás</a>
                    </li>
                </ul>

                <div className="navbar-brand mx-auto order-0">
                    <img src="https://picsum.photos/800" alt="Nem ez kell"/>
                </div>
                <ul>
                    <li>
                        <a className="nav-link mx-6" href="/order">Rendelés</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
