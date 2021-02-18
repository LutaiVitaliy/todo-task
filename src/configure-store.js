import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';

export default function configureStore(initialState = {}) {
    const middlewares = [logger, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
  
    const store = createStore(rootReducer, initialState, middlewareEnhancer);
  
    return store;
};
