import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Componants/Root';
import Home from './Componants/Home';
import Dashboard from './Componants/Dashboard';
import Statistics from './Componants/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
