import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout/HomeLayout';
import PopularPage from './pages/PopularPage/PopularPage';
import NowPlayingPage from './pages/NowPlayingPage/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage/UpcomingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <PopularPage />,
      },
      {
        path: 'popular', 
        element: <PopularPage />,
      },
      {
        path: 'nowplaying', //
        element: <NowPlayingPage />,
      },
      {
        path: 'toprated',
        element: <TopRatedPage />,
      },
      { path: 'upcoming',
        element: <UpcomingPage />,}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
