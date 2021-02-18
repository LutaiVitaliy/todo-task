import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './configure-store';
import App from './App';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('content')
);
