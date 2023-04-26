import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOpen: (state, action) => {
            state.isOpen = true;
        },
        modalClosed: (state, action) => {
            state.isOpen = false;
        },
    },
})

// console.log(state);

export const { modalOpen, modalClosed } = modalSlice.actions;

export default modalSlice.reducer

// export const sliceOfModal = modalSlice.reducer;