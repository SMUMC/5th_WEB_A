import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>는 렌더링을 한 번 더 시킴 지우고 만드는 것도 방법이다.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
