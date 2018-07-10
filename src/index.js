import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
//rem
import './modules/rem.js';

//路由
// import {
//      HashRouter as Router
// } from 'react-router-dom'
    import {
        BrowserRouter as Router
    } from 'react-router-dom'

ReactDOM.render(
<Router>
<App />
</Router>
, document.getElementById('root'));
registerServiceWorker();
