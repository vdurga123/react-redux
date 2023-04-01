import {createStore} from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middleware=[thunk]
 const store=createStore(
    reducer,
  composeWithDevTools(applyMiddleware(...middleware))
 )
 export default store;