import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";

// 글로벌스타일은 특이하게 이런 식으로 부여한다. child 엘리먼트를 무시하기 때문이다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>는 렌더링을 한 번 더 시킴 지우고 만드는 것도 방법이다.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
