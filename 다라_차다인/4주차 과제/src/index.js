import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Nowplaying } from './pages/now-playing';
import { Popular } from './pages/popular';
import { TopRated } from './pages/top-rated';
import { UpComing } from './pages/up-coming';
import ErrorPage from './pages/error/ErrorPage';
import Loading from './pages/loading/Loading';
import * as loaders from './pages/index';

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
        element: <Popular />,
        loader: loaders.getPopularMovie,
      },   //main page
      { index: true, 
        path: "/nowplaying", 
        element: <Nowplaying />,
        loader: loaders.movieDummy,
      },
      { index: true, 
        path: "/toprated", 
        element: <TopRated />,
        loader: loaders.getTopRatedMovie,
      },      
      { index: true, 
        path: "/upcoming", 
        element: <UpComing />,
        loader: loaders.getUpComing,
      },
    ],
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />}/>
  </React.StrictMode>
);
