import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componanat/Home/Home';
import About from './componanat/about/About';
import Contact from './componanat/contact/Contact';
import Users from './componanat/Users/Users';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>

      },
      {
        path: '/contact',
        element: <Contact></Contact>

      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),

        element: <Users></Users>

      }

    ]

  },


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)