import { useState } from "react"
import { deleteQuestion } from "../../../apis/question";

export function Question ({question: {_id, question: intitule, user} }) {

    const [showDeleteModale, setShowDeleteModale] = useState(false)
    function handleDelete () {
        deleteQuestion(_id)
        console.log(_id);
    }

    function handleShowDeleteModale () {
        setShowDeleteModale(!showDeleteModale)
    }

    return (
        <div>
            <div>
                <p>{intitule} ?</p>
                <p>{user.pseudo}</p>
            </div>
            <button>Editer</button>
            <button onClick={handleShowDeleteModale}>Supprimer</button>
            {
                showDeleteModale === true && (
                    <div className="modaleDelete">
                        <p>Voulez vous vraiment supprimer cette événement</p>
                        <div>
                            <button onClick={handleShowDeleteModale} className="annuler">Annuler</button>
                            <button onClick={handleDelete} className="supprimerEvenement">Supprimer l'événement</button>
                        </div>
                    </div>
                )
             }
        </div>
        
    )
}