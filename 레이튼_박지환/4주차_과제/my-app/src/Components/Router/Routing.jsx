import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NowPlaying from "../Pages/NowPlaying";
import Footer from "../Footer/Footer";
import Popular from "../Pages/Popular";
import TopRated from "../Pages/TopRated";
import Upcoming from "../Pages/Upcoming";

export default function Routing() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Popular />}></Route>
        <Route path="/now_playing" element={<NowPlaying />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/top_rated" element={<TopRated />}></Route>
        <Route path="/upcoming" element={<Upcoming />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
