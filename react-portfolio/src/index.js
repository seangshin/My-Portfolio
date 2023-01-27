import React from 'react'; // entry point to the React Library
import ReactDOM from 'react-dom/client'; // provides acces to DOM-specific methods
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// takes React components and renders them to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
