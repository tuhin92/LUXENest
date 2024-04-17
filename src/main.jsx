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
        element: <CutomerReview></CutomerReview>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);