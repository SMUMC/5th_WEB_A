import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import * as S from "../Router/Routing.styled";
import {
  MainPage,
  MovieDetail,
  NotFound,
  NowPlaying,
  Popular,
  TopRated,
  SignUp,
  Upcoming,
  LoginPage,
} from "../Pages/index";

export default function Routing() {
  return (
    <S.Container>
      <Navbar />
      <S.MovieContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/now_playing" element={<NowPlaying />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top_rated" element={<TopRated />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </S.MovieContainer>
      <Footer />
    </S.Container>
  );
}
