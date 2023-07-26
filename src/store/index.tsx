import { combineReducers, configureStore } from '@reduxjs/toolkit'
import toolkitReducer from './reducer'


export const rootReducer = combineReducers({
    test_data:toolkitReducer
})

export const store = configureStore({
    reducer:rootReducer
})