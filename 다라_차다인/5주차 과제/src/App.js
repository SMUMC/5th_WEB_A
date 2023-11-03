import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import Navbar from "./uis/navbar/Navbar";
import Footer from "./uis/footer/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === "loading";

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {isPageLoading ? <Loading /> : <Outlet />}
            <Footer />
        </ThemeProvider>
    );
}

export default App;
