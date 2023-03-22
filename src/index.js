import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';


import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "blog",
        element: <Blog/>,
      },
  ]);

const container = document.getElementById('result')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)