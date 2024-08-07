import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import App from './App.jsx';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import User from './Components/User.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Navbar /><Home /> </>
  },
  {
    path: "/login",
    element: <> <Navbar /><Login /> </>
  },
  {
    path: "/about",
    element: <> <Navbar /><About /> </>
  },
  {
    path: "/user/:username",
    element: <> <Navbar /><User /> </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
