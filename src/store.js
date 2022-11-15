// import { configureStore } from './configureStore';
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { rootReducers } from './Reducers';

export const store = createStore(rootReducers, applyMiddleware(thunk));