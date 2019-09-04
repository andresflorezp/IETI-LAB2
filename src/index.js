import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

localStorage.setItem('email', "admin@mail.com");
localStorage.setItem('password', "admin");

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
