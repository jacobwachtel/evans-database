import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import client from '../../services/api'
import { baseURL } from '../../services/api'
import axios from 'axios'


const initialState = {
    tools: [],
    status: 'idle',
    error: null,
}

// Fetches All Tools from DB
export const fetchTools = createAsyncThunk('tools/fetchTools', async () => {
    const response = await axios.get(baseURL)
    console.log(response.data)
    return response.data;
})


export const addNewTool = createAsyncThunk('tools/addNewTool', async (newTool) => {
    const response = await client.post(baseURL, newTool)
    return response.data;
})

const toolsSlice = createSlice({
    name: 'tools',
    initialState,
    reducers: {
        toolUpdated(state, action) {
            const { id, name, description, image, owner } = action.payload
            const existingTool = state.tools.find((tool) => tool.id === id)
            if (existingTool) {
                existingTool.name = name
                existingTool.description = description
                existingTool.image = image
                existingTool.owner = owner
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTools.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTools.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tools = state.tools.concat(action.payload)  
            })
            .addCase(fetchTools.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewTool.fulfilled, (state, action) => {
                state.tools.push(action.payload)
            })
    },
})

// console.log();

export const { toolUpdated } = toolsSlice.actions;

export const selectAllTools = (state) => state.tools.tools
export const selectToolStatus = (state) => state.tools.status

export default toolsSlice.reducer
