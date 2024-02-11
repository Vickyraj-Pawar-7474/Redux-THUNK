import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import newsReducer from './Reducer/Reducer';

const store=createStore(newsReducer,applyMiddleware(thunk));

export default store;
