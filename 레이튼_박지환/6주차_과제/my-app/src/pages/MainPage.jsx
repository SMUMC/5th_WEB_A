import Banner from "../components/Banner/Banner";
import Explain from "../components/Explain/Explain";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import MusicContainer from "../components/MusicList/MusicList";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Explain />
      <MusicContainer />
      <Footer />
      <Modal />
    </div>
  );
}
