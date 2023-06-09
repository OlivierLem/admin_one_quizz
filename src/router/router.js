import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

// Pages //

import Connexion from "../pages/Connexion/Connexion";
import ErrorPage from "../pages/ErrorPage/ErrorPage"; 
import CreerCours from "../pages/createPage/CreerCours/CreerCours";
import { CreerQuizz } from "../pages/createPage/CreerQuizz/CreerQuizz";
import { userLoader } from '../loaders/userLoader'
import { CreateQuestion } from "../pages/createPage/CreateQuestion/CreateQuestion";
import { QuestionPage } from "../pages/QuestionPage/QuestionPage";
import { AdminPage } from "../pages/AdminPage/AdminPage";
import AnaliticsPage from "../pages/AdminPage/AnaliticsPage";

const qcmData = [{
    question: "Quelle est la langue utilisé ?",
    reponses: [
      {
        reponse: 'Espagnol',
        isCorrect: false
      },
      {
        reponse: 'Français',
        isCorrect: true
      },
      {
        reponse: 'Anglais',
        isCorrect: false
      },
      {
        reponse: 'Allemand',
        isCorrect: false
      }
    ],
    theme: 'mathématique'
  },
  {
    question: "prénom ?",
    reponses: [
      {
        reponse: 'John',
        isCorrect: true
      },
      {
        reponse: 'jane',
        isCorrect: false
      },
      {
        reponse: 'james',
        isCorrect: false
      },
      {
        reponse: 'jimmy',
        isCorrect: false
      }
    ],
    theme: 'géographie'
  },  
  { question: "question 3 ?",
    reponses: [
      {
        reponse: 'Réponse 1',
        isCorrect: false
      },
      {
        reponse: 'Réponse 2',
        isCorrect: false
      },
      {
        reponse: 'Réponse 3',
        isCorrect: false
      },
      {
        reponse: 'Réponse 4',
        isCorrect: true
      }
    ],
    theme: 'histoire'
  },  
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: userLoader,
        children: [
            {
                index: 'true',
                element: <Connexion />
            },
            {
                path: '/admin',
                element: (
                  <ProtectedRoute >
                    <AdminPage />
                  </ProtectedRoute>
                ), 
                children: [
                  {
                    path: '/admin/question',
                    element: <QuestionPage />
                  },
                  {
                    path: '/admin/analitics',
                    element: <AnaliticsPage />
                  }
                ]
            },
            {
              path: '/creer_quizz',
              element: (
              <ProtectedRoute>
                <CreerQuizz />
              </ProtectedRoute>
              
              )
            },
            {
              path: '/creer_question',
              element: (
              <ProtectedRoute>
                <CreateQuestion />
              </ProtectedRoute>
              
              )
            },
            {
              path: '/creer_cours',
              element: (
              <ProtectedRoute>
                <CreerCours title='cours de conjugaison' />
              </ProtectedRoute>
              )
            },
        ]
    }
])