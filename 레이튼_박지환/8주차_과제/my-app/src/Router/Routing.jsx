import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import {
  MainPage,
  MovieDetail,
  NotFound,
  NowPlaying,
  Popular,
  TopRated,
  SignUp,
  Upcoming,
} from "../Pages/index";

export default function Routing() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/now_playing" element={<NowPlaying />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/top_rated" element={<TopRated />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/upcoming" element={<Upcoming />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
