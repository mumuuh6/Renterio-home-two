import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Componants/Root';
import Home from './Componants/Home';
import Dashboard from './Componants/Dashboard';
import Statistics from './Componants/Statistics';
import GadgetDetail from './Componants/ProductDetails/GadgetDetail';
import ContactUs from './Componants/ContactUs';
import ErrorPage from './Componants/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path:'/gadgets/:gadgetId',
        element:<GadgetDetail></GadgetDetail>,
        loader:()=>fetch('/Gadget.json')
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        loader:()=>fetch('/Gadget.json')
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
