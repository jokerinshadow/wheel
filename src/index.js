import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
//store
import { Provider } from 'react-redux';
import store from './store';
import 'swiper/dist/css/swiper.min.css';
//rem
import './modules/rem.js';

//路由
// import {
//      HashRouter as Router
// } from 'react-router-dom'
    import {
        BrowserRouter as Router
    } from 'react-router-dom'
//轮播
import 'swiper/dist/css/swiper.min.css';

ReactDOM.render(
<Provider store = {store}>
<Router>
<App />
</Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
