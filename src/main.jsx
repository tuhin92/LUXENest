import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AboutUS from './components/AboutUS';
import Errorpage from './components/ErrorPage/Errorpage';
import EstateDetails from './components/EstateDetails/EstateDetails';
import AuthProvider from './providers/AuthProvider';
import CutomerReview from './CutomerReview';
import PrivateRoutes from './Routes/PrivateRoutes';
import Profile from './components/Profile';
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import BudgetManaging from './components/BudgetManaging';
import FeedBack from './components/FeedBack';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/aboutUs',
        element: <AboutUS></AboutUS>
      },
      {
        path: '/estate/:id',
        element: <EstateDetails></EstateDetails>,
        loader: ()=> fetch('../estates.json')
      },
      {
        path: '/customersReview',
        element: <PrivateRoutes><CutomerReview></CutomerReview></PrivateRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: '/budgetManage',
        element: <BudgetManaging></BudgetManaging>
      },
      {
        path: '/feedback',
        element:<FeedBack></FeedBack>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
