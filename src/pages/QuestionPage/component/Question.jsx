import { useState } from "react"
import { deleteQuestion } from "../../../apis/question";
import { CreateQuestion } from "../../createPage/CreateQuestion/CreateQuestion";

export function Question ({question: {question: intitule, user, theme}, question }) {

    const [showDeleteModale, setShowDeleteModale] = useState(false)
    const [showEditModale, setShowEditModale] = useState(false)

    function handleDelete () {
        try {
            deleteQuestion(question)
        } catch (error) {
            console.error(error)
        }
    }

    function handleShowDeleteModale () {
        setShowDeleteModale(!showDeleteModale)
    }
    function handleShowEditModale () {
        setShowEditModale(!showEditModale)
    }

    console.log(question);

    return (
        <div className="cardQuestion">
            <div className="infoQuestion">
                <p>{intitule} ?</p>
                <div>
                    <p>Utilisateur: {user.pseudo}</p>
                    <p>Theme: {theme.name}</p>
                </div>
            </div>
            <div className="cardButtons">
                <button onClick={handleShowEditModale}><i className="fa-solid fa-pen-to-square"></i> Editer</button>
                <button onClick={handleShowDeleteModale}><i className="fa-solid fa-trash"></i> Supprimer</button>
            </div>
            
            {
                showDeleteModale === true && (
                    <div className="modaleDelete">
                        <p>Voulez vous vraiment supprimer cette événement</p>
                        <div className="cardButtons">
                            <button onClick={handleShowDeleteModale} className="annuler"><i className="fa-solid fa-arrow-left"></i> Annuler</button>
                            <button onClick={handleDelete} className="supprimerEvenement"><i className="fa-solid fa-trash"></i> Supprimer l'événement</button>
                        </div>
                    </div>
                )
            }
            {
                showEditModale === true && (
                    <div className="fondEditQuestion" >
                        <CreateQuestion question={question} />
                        <button onClick={() => setShowEditModale(!showEditModale)} ><i className="fa-solid fa-xmark"></i></button>
                    </div>
                )
            }
        </div>
        
    )
}