import {configureStore} from "@reduxjs/toolkit";

import toolsReducer from './tools/toolSlice'


// const reducer = combineReducers({
//     tools,
// })

export const store = configureStore ({
    reducer: {
        tools: toolsReducer,
    },
})

