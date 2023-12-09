import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './routes/Home'
import Connexion from './routes/Connexion'
import CreationCompte from './routes/CreationCompte'

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
  } 
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
