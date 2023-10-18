import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  ErrorPage,
  HomeLayout,
  MainPage,
  NowPlayingPage,
  TopRatedPage,
  UpComingPage,
  PopularPage,
  MovieDetailPage,
} from './pages';

import { Loading } from './components';

// loaders
import { loader as popularLoader } from './pages/PopularPage/PopularPage';
import { loader as nowPlayingLoader } from './pages/NowPlayingPage/NowPlayingPage';
import { loader as topRatedLoader } from './pages/TopRated/TopRatedPage';
import { loader as upComingLoader } from './pages/UpComing/UpComingPage';
import { ThemeProvider } from 'styled-components';
import theme from './constants/Theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'popular',
        element: <PopularPage />,
        loader: popularLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'nowplaying',
        element: <NowPlayingPage />,
        loader: nowPlayingLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'toprated',
        element: <TopRatedPage />,
        loader: topRatedLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'upcoming',
        element: <UpComingPage />,
        loader: upComingLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'movie/:title',
        element: <MovieDetailPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<Loading />} />;
    </ThemeProvider>
  );
}

export default App;
