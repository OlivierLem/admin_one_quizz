import { NavLink, Outlet } from "react-router-dom";
import './AdminPage.scss'

export function AdminPage () {
    return (
        <section>
            <div className="headerAdmin">
                <h1>Admin</h1>
                <nav>
                    <NavLink to='/admin/question'>Question</NavLink>
                    {/* <NavLink to='/admin/question'>Quizz</NavLink>
                    <NavLink to='/admin/question'>Cours</NavLink>
                    <NavLink to='/admin/question'>Thémes</NavLink> */}
                    <NavLink to='/admin/analitics'>Analitics</NavLink>
                </nav>
            </div>
            
            <Outlet />
        </section>
    )
}