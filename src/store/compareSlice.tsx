import {createSlice} from "@reduxjs/toolkit";

type CompareItem = {
    id: number,
}
type TypeState = {
    items: CompareItem[],
    totalCount: number
}

const initialState: TypeState = {
    items: [],
    totalCount: 0
}
const compareSlice = createSlice({
    name: 'compare',
    initialState: initialState,
    reducers: {
        toggleCompare(state, action){
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if(!existingItem){
                state.items.push({...newItem})
                state.totalCount++
            } else {
                state.items = state.items.filter(item => item.id !== newItem.id)
                state.totalCount--
            }
        }
    }
})

export const compareSliceActions = compareSlice.actions
export const compareSliceReducer = compareSlice.reducer
export default  compareSlice