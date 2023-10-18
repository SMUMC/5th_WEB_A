import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  NowPlaying,
  Popular,
  TopRated,
  Upcoming,
  MainPage,
  MovieDetail,
  NotFound,
} from "../Pages/index";

// import Footer from "../Footer/Footer";

export default function Routing() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/now_playing" element={<NowPlaying />}></Route>
        <Route path="/movie/:title" element={<MovieDetail />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/top_rated" element={<TopRated />}></Route>
        <Route path="/upcoming" element={<Upcoming />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
