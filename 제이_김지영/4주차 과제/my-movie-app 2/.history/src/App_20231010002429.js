import MainPage from './pages/MainPage/MainPage';

function App() {
  return <>{isLoading ? <h3>로딩중입니다.</h3> : <MainPage />}</>;
}
export default App;
