import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NowPlaying from "./Components/Pages/NowPlaying";
import Footer from "./Components/Footer/Footer";
import Popular from "./Components/Pages/Popular";
import TopRated from "./Components/Pages/TopRated";
import Upcoming from "./Components/Pages/Upcoming";
// App.js는 사실상 최상위 컴포넌트임
// index.js에 <BrowserRouter> 넣고 빈태그로 감싸주기
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/now_playing" element={<NowPlaying />}></Route>
        <Route path="/" element={<Popular />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/top_rated" element={<TopRated />}></Route>
        <Route path="/upcoming" element={<Upcoming />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App; // 컴포넌트 내보내기
