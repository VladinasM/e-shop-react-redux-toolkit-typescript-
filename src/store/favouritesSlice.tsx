import React from 'react';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Item} from "./cartSlice";

type TypeState = {
    items: Item[],
    totalFavouritesItems: number
}

const initialState: TypeState = {
    items: [],
    totalFavouritesItems: 0
}
const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: initialState,
    reducers: {
        toggleFavourites(state, action){
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if(!existingItem){
                state.items.push({...newItem})
                state.totalFavouritesItems++
            } else {
                state.items = state.items.filter(item => item.id !== newItem.id)
                state.totalFavouritesItems--
            }
        }
    }
})

export const favouritesSliceActions = favouritesSlice.actions
export const favouritesSliceReducer = favouritesSlice.reducer
export default favouritesSlice