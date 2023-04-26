import { combineReducers, configureStore } from "@reduxjs/toolkit";

import toolsReducer from './tools/toolSlice'
import modalReducer from './tools/modalSlice'


const reducers = combineReducers({
    tools: toolsReducer,
    modal: modalReducer
})

export const store = configureStore ({
    reducer: reducers
})

