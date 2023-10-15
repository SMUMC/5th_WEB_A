import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // index.html 파일의 'root' 요소에 렌더링
);
*/