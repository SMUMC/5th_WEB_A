import React from "react";
import { Outlet } from "react-router-dom";
// import Loading from "./pages/loading/Loading";
import Navbar from "./uis/navbar/Navbar";
import Footer from "./uis/footer/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* {isPageLoading ? <Loading /> : <Outlet />} */}
            <Outlet />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
