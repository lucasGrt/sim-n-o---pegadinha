import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import Home from "./routes/home.tsx"
import Sim from "./routes/Sim.tsx"


const router = createBrowserRouter([
  { 
    path:"/",
    element:<Home/>
  },
  { 
    path:"/sim",
    element:<Sim/>
  }
  
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
