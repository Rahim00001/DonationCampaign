import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import DonationDetiles from './Components/DonationDetiles/DonationDetiles';
import ErrorPage from './Components/Error/ErrorPage';
import DonationList from './Components/DonationList/DonationList';

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
        path: '/donationList',
        element: <DonationList></DonationList>,
        loader: () => fetch('/donetions.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/allDonations/:id',
        element: <DonationDetiles></DonationDetiles>,
        loader: () => fetch('/donetions.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
