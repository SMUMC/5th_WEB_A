// App.js는 사실상 최상위 컴포넌트임
// index.js에 <BrowserRouter> 넣고 빈태그로 감싸주기
import Routing from "../src/Router/Routing";

function App() {
  return <Routing />;
}

export default App; // 컴포넌트 내보내기
