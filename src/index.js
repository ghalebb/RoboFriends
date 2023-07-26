import React,{StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './App';


const root = createRoot(document.getElementById('root'));

	root.render(
			<StrictMode>
			<div>
			<App/>
			</div>
			</StrictMode>
			);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();