import { useContext, useEffect, useRef, useState } from 'react'
import styles from './Connexion.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Connexion () {

    const { signin, user} = useContext(AuthContext)
    const formRef = useRef()

    const defaultValues = {
        pseudo: '',
        password: '',
        stayConnected: false
    }
     
    const shemaConnexion = yup.object({
        pseudo: yup
            .string()
            .required('Ce champ est vide'),
        password: yup
            .string()
            .required('Ce champ est vide'),
    })

    const { 
        register, 
        handleSubmit,
        formState: { errors, isSubmitting } ,
        setError, 
        clearErrors
    } = useForm({
        defaultValues,
        resolver: yupResolver(shemaConnexion)
    })

    function handleClick () {
        const labels = document.querySelectorAll('.form label');
        for (const label of labels) {
            label.classList.remove(`${styles.active}`)
        }
    }


    const submit = handleSubmit(async (values) => {
        /* console.log(values); */
        try {
            clearErrors();
            await signin(values);
            formRef.current.reset()
        } catch (message) {
            setError('generic', {type: 'generic', message})
        }
    })

    function handleInput (e) {
        // ? Manque la gestion des espaces dans les input
        const label = document.querySelector(`label[for='${e.target.name}']`)
        if(e.target.value !== '') {
            label.classList.add(`${styles.active}`);
        } else {
            label.classList.remove(`${styles.active}`);
        }
    }

    return (
        <>
            {user ? (
                <Navigate to='/admin' />
            ) : (
                <div className={` ${styles.connexion} active`}>
                    <form action="" ref={formRef} className={`form ${styles.connexionForm}`} onSubmit={submit}>
                        <h3>Connexion au compte</h3>
                        <div>
                        <input {...register('pseudo')} onInput={handleInput} type="text" name="pseudo" />
                        <label htmlFor="pseudo">Pseudo</label>
                        </div>
                        {errors?.pseudo && <p className={styles.errorMessage}>{errors.pseudo.message}</p> }
                        <div>
                            <input {...register('password')} onInput={handleInput} type="password" name="password"  />
                            <label htmlFor="password">Mots de passe</label>
                        </div>
                            {errors?.password && <p className={styles.errorMessage}>{errors.password.message}</p> }

                        <span>
                            <input {...register('stayConnected')} type="checkbox" name="stayConnected" />
                            <label htmlFor="stayConnected"><i className={"fa-solid fa-check"}></i>Rester connecter</label>
                        </span>
                        <div className={styles.formInfo}>
                            <button type='button' className={styles.notRegister} onClick={handleClick}>Pas encore inscrit</button>
                            <a href='#'>Mots de passe oublié ?</a>
                        </div>
                        {errors.generic && ( <p className={styles.errorMessage}>{errors.generic.message}</p> )}
                        
                        <button disabled={isSubmitting} >Se connecter</button> 
                    </form>
                </div>
            )}
        </>
    )
}