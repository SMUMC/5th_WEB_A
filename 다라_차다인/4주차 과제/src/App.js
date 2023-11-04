import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import Navbar from "./uis/Navbar";
import Footer from "./uis/Footer";

function App() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      {isPageLoading ? <Loading /> : <Outlet/> }
      <Footer />
    </>
  );
}

export default App;
