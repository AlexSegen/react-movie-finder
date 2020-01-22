import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import './assets/scss/main.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';


//Redux Store
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducers from './reducers'

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
