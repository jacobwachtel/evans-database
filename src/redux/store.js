import {configureStore} from "@reduxjs/toolkit";

import toolsReducer from './tools/toolSlice'
import modalReducer from './tools/modalSlice'


// const reducer = combineReducers({
//     tools,
// })

export const store = configureStore ({
    reducer: {
        tools: toolsReducer,
        modal: modalReducer,
    },
})

