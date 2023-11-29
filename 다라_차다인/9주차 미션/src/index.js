import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Nowplaying, Popular, TopRated, UpComing, ErrorPage, Loading, Home, Signup, Login } from "./pages/index";
import { MovieDetail } from "./pages/movie-detail";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/store/index";

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
const queryClient = new QueryClient();
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} fallbackElement={<Loading />} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);
