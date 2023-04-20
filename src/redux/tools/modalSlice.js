import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalOpen: false
}

const modalSlice = createSlice({
    name: 'modalOpen',
    initialState,
    reducers: {
        modalOpen(state, action) {
            state.modalOpen = action.payload
        }
    }
})

export const modalOpen = (state) => state.modal.modalOpen

export default modalSlice.reducer