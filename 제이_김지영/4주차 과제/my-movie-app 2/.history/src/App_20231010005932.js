import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loading from './Components/Loading/Loading';
import MainPage from './pages/MainPage/MainPage';
import { useEffect, useState } from 'react';
import HomeLayout from './pages/HomeLayout/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'nowplaying',
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
