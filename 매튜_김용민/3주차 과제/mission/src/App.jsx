import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  ErrorPage,
  HomeLayout,
  MainPage,
  NowPlayingPage,
  TopRatedPage,
  UpComingPage,
} from './pages';
import { Loading } from './components';

// loaders
import { loader as mainLoader } from './pages/MainPage/MainPage';
import { loader as nowPlayingLoader } from './pages/NowPlayingPage/NowPlayingPage';
import { loader as topRatedLoader } from './pages/TopRated/TopRatedPage';
import { loader as upComingLoader } from './pages/UpComing/UpComingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    error: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
        loader: mainLoader,
      },
      {
        path: 'nowplaying',
        element: <NowPlayingPage />,
        loader: nowPlayingLoader,
      },
      {
        path: 'toprated',
        element: <TopRatedPage />,
        loader: topRatedLoader,
      },
      {
        path: 'upcoming',
        element: <UpComingPage />,
        loader: upComingLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}

export default App;
