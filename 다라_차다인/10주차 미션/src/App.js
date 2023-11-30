import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Space, Flex } from "antd";
import { Navbar } from "./ui/navbar";
import { Home } from "./pages/home";
import { Signup } from './pages/signup';
import { MyProfile } from './pages/myProfile';
import { Provider } from 'react-redux';
import store from './redux/store';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
