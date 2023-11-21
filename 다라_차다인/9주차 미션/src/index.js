import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Nowplaying, Popular, TopRated, UpComing, ErrorPage, Loading, Home, Signup, Login } from "./pages/index";
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
            },
            {
                path: "nowplaying",
                element: <Nowplaying />,
            },
            {
                path: "toprated",
                element: <TopRated />,
            },
            {
                path: "upcoming",
                element: <UpComing />,
            },
            {
                path: "movie/:id",
                element: <MovieDetail />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} fallbackElement={<Loading />} />
);
