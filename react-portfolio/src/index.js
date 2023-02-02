import React from 'react'; // entry point to the React Library
import ReactDOM from 'react-dom'; // provides acces to DOM-specific methods
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// takes React components and renders them to the DOM
ReactDOM.render(<App />, document.getElementById('root'));