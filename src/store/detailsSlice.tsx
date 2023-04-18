import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Item} from "./cartSlice";

type InitialType = {
    isOpen: boolean,
    currentItem: Item
}

const initialState: InitialType = {
    isOpen: false,
    currentItem: {
        id: 0,
        title: '',
        price: 0,
        salePrice: 0,
        type: '',
        imgSrc: '',
        variants: 0,
        badgeText: '',
        itemAmount: 1,
        sum: 0
    }
}
const detailsSlice = createSlice({
    name: 'details',
    initialState: initialState,
    reducers: {
        openDetails(state, action) {
            const item = action.payload

            state.isOpen = true
            state.currentItem = {
                id: item.id,
                title: item.title,
                price: item.price,
                salePrice: item.salePrice,
                type: item.type,
                imgSrc: item.imgSrc,
                variants: item.variants,
                badgeText: item.badgeText,
                itemAmount: 1
            }

        },
        closeDetails(state) {
            state.isOpen = false
        },

        setAmountInput(state, action: PayloadAction<Item>) {
            const newItem = action.payload
            const itemAmount = newItem.itemAmount
            const itemPrice = newItem.salePrice || newItem.price

            state.currentItem.itemAmount = itemAmount
            state.currentItem.sum = itemPrice * itemAmount
    },
}
})

export const detailsSliceActions = detailsSlice.actions
export const detailsSliceReducer = detailsSlice.reducer
export default detailsSlice