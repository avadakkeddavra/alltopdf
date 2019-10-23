import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { StoreContext } from 'redux-react-hook';


import App from './App';
import { store } from './store';


import './index.css';

const AppContainer = (
    <StoreContext.Provider value={store}>
        <Router>
            <App/>
        </Router>
    </StoreContext.Provider>
)
if(document.getElementById('root')) {
    ReactDOM.render(AppContainer, document.getElementById('root'));
}

