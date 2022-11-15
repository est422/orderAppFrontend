import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
import { rootReducers } from './Reducers';

const store = configureStore({

    reducers: {
        rootReducers
    }
})

export default store;