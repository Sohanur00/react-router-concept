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
import UserDetails from './componanat/UserDeail/UserDetails';
import Post from './componanat/PluralPost/Post';
import PostDetils from './componanat/PostDeails/PostDetils';


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

      },
      {
        path: '/user/:userid',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: < UserDetails ></UserDetails >
      },
      {
        path: '/post',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Post></Post>

      },
      {

        path: '/post2/:postid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),

        element: <PostDetils></PostDetils>

      }

    ]

  },


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
