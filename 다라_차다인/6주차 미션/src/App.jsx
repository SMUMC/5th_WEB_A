import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Navbar } from "./uis/navbar";
import { MusicCart } from "./pages/MusicCart";
import { Provider } from "react-redux";
import store from "./redux/store/index"; 

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MusicCart />
      </ThemeProvider>
    </Provider>
  );
}

export default App;