import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import Project from './pages/projects'
 import Contact from './pages/contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Team from './pages/teams';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "projects",
    element:<Project/>,
  },
  {
    path: "contact",
    element:<Contact/>,
  },
  {
    path: "team",
    element:<Team/>,
  },
  {
    path: "/V-BLAZE",
    element:<App/>,
  },
 
  
]);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <RouterProvider router={router} />

   );
