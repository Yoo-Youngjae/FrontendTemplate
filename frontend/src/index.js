import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import store, { history } from './store/store';

axios.defaults.xsrfCookieName = "csrftoken"; //get 빼고 delete 등 db 수정하는 것들 막음
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

ReactDOM.render(
    <Provider store={store} >
        <App history={history} />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
