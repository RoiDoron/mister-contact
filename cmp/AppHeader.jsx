
const { Link, NavLink } = ReactRouterDOM


export function AppHeader() {
    return (<header>
        <h1>Hello roei its yahav</h1>
        <nav>
            <NavLink to="/">Home</NavLink> |<NavLink to="/contact">Contacts</NavLink> |
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
    )
}