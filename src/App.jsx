import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Auth from './service/auth';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

function App() {


const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth chill = {<Login/>} redirect={"/dashboard"}></Auth>,
  },
  {
    path: "/login",
    element:  <Auth chill = {<Login/>} redirect={"/dashboard"}></Auth>,
  },
  {
    path: "/dashboard",
    element: <Auth chill = {<Dashboard/>} redirect={"/login"}></Auth> ,
  },
]);

return(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)

}

export default App
