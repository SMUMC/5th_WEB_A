import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Movie } from './pages/movie';
import ErrorPage from './pages/error/ErrorPage';
import { movieDummy } from './api/movie/movieDummy';

import { 
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, 
        path: "/", 
        element: <Movie />,
        loader: () => {
          return movieDummy().then((res) => {
            if (res) {
              return res;
            } else {
              return null;
            }
          });
        }
      },  //main page
    ],
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
