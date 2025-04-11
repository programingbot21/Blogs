import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Logout from './components/Logout/Logout.jsx'
import It from './components/Category/It.jsx'
import Share from './components/Category/Share.jsx'
import Spot from './components/Category/Spot.jsx'
import Trends from './components/Category/Trends.jsx'



const router = createBrowserRouter([
  {
    Path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },{
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
     { Path: '/logout',
      element: <Logout/>
     },
     {
      path: '/it',
      element: <It/>
     },{
      path: '/share',
      element: <Share/>
     },
     {
      path: '/spot',
      element: <Spot/>
     },
     {
      path: '/trend',
      element: <Trends/>
     }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
