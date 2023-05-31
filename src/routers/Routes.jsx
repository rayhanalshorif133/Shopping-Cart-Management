import React from 'react';
import {
 RouterProvider,
 createBrowserRouter
} from "react-router-dom";
import Home from '../pages/Home/Home';
import Navbar from './../components/header/Navbar';

export default function Routes() {
 const router = createBrowserRouter([
  {
   path: "/",
   element: <Home />,
  },
  {
   path: "about",
   element: <div>About</div>,
  },
 ]);
 return (
  <>
   <Navbar />
   <RouterProvider router={router} />
  </>
 )
}
