import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './routes/Home'
import Connexion from './routes/Connexion'
import CreationCompte from './routes/CreationCompte'
import Modifmdp from './routes/Modifmdp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Connexion />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/creation-compte',
    element: <CreationCompte />
  },
  {
    path: '/modif-mdp',
    element: <Modifmdp />
  } 
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
