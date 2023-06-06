import { useContext, useState } from 'react'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Header () {

    const { user, signout } = useContext(AuthContext);
    /* console.log(user); */
    const handleClick = () => {
        signout();
    }

    //! bug hover lien 

    return (
        <header className={`${styles.header}`} >
            <NavLink to='/'>Logo</NavLink>
            {user ? (
                <div>
                    <div className={`${styles.createButton}`}>
                            <button>Créer <i className={"fa-solid fa-chevron-down"}></i></button>
                            <span className={`${styles.active}`}>
                                <NavLink to='/creer_quizz'>Créer un quizz</NavLink>
                                <NavLink to='/creer_cours'>Créer un cours</NavLink>
                                <NavLink to='/creer_question'>Créer une question</NavLink>
                            </span>
                        </div>
                        
                        <NavLink to='/' onClick={handleClick}>Déconnexion <i className={"fa-solid fa-right-from-bracket"}></i></NavLink>
                        
                    </div>
                ) : (
                    <div>
                        <NavLink to='/' >Connexion</NavLink>
                    </div>
                )

            }
            
        </header>
    )
}