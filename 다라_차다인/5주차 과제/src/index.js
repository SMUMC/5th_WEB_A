import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { loader as getNowPlayingMovie } from "./pages/now-playing/index";
import { loader as getPopularMovie } from "./pages/popular/index";
import { loader as getTopRatedMovie } from "./pages/top-rated/index";
import { loader as getUpComing } from "./pages/up-coming/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Nowplaying, Popular, TopRated, UpComing, ErrorPage, Loading, Home } from "./pages/index";
import { MovieDetail } from "./pages/movie-detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "popular",
                element: <Popular />,
                loader: getPopularMovie,
            },
            {
                path: "nowplaying",
                element: <Nowplaying />,
                loader: getNowPlayingMovie,
            },
            {
                path: "toprated",
                element: <TopRated />,
                loader: getTopRatedMovie,
            },
            {
                path: "upcoming",
                element: <UpComing />,
                loader: getUpComing,
            },
            {
                path: "movie/:id/:title",
                element: <MovieDetail />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} fallbackElement={<Loading />} />
    </React.StrictMode>,
);
