import { NavLink, Outlet } from "react-router-dom";

export function AdminPage () {
    return (
        <section>
            <h1>Admin</h1>
            <nav>
                <NavLink to='/admin'>Home</NavLink>
                <NavLink to='/admin/question'>Question</NavLink>
            </nav>
            <Outlet />
        </section>
    )
}