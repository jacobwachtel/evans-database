import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from "@reduxjs/toolkit";

import { applyMiddleware } from "redux";

import toolsReducer from './tools/toolSlice'


// const reducer = combineReducers({
//     tools,
// })

export const store = configureStore ({
    reducer: {
        tools: toolsReducer,
    },
})

