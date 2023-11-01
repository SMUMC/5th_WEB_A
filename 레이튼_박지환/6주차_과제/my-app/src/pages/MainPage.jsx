import Banner from "../components/Banner/Banner";
import Explain from "../components/Explain/Explain";
import Footer from "../components/Footer/Footer";
import MusicContainer from "../components/MusicList/MusicList";

export default function MainPage() {
  return (
    <>
      <Banner />
      <Explain />
      <MusicContainer />
      <Footer />
    </>
  );
}
