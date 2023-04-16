import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}
const detailsSlice = createSlice({
    name: 'details',
    initialState: initialState,
    reducers: {
        openDetails(state){
            state.isOpen = true
        },
        closeDetails(state){
            state.isOpen = true
        }
    }
})

export const detailsSliceActions = detailsSlice.actions
export const detailsSliceReducer = detailsSlice.reducer
export default detailsSlice