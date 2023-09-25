import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Favorites from './Components/Favorites/Favorites';
import Statistics from './Components/Statistics/Statistics';
import DonationDetiles from './Components/DonationDetiles/DonationDetiles';
import ErrorPage from './Components/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/donetions.json')

      },
      {
        path: '/favorites',
        element: <Favorites></Favorites>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/detiles',
        element: <DonationDetiles></DonationDetiles>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
