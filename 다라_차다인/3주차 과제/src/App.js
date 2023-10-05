import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./pages/loading/Loading";

function App() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      {/*<Navvar />*/}
      {isPageLoading ? <Loading /> : <Outlet />}
      {/*<Footer />*/}
    </>
  );
}

export default App;
