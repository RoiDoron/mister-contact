
const { Link, NavLink } = ReactRouterDOM


export function AppHeader() {
    return (
    <header className="app-header">
        <h1 className="logos fa-solid fa-phone">Mister Contact</h1>
        <nav className="nav-bar">
            <NavLink to="/">Home</NavLink> |<NavLink to="/contact">Contacts</NavLink> |
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
    )
}