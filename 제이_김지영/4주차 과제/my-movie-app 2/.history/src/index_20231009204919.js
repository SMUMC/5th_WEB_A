import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './index.css';
import Movie from './Components/Movie';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
	<React.StrictMode>
		<App />
    <Movie />
	</React.StrictMode>
);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // index.html ?åå?ùº?ùò 'root' ?öî?Üå?óê ?†å?çîÎß?
);
*/