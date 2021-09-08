import {rootReducer}from '../reducer/index'

import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store= createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))