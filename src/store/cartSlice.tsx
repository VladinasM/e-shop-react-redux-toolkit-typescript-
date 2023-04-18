import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import divanForest from "../assets/images/divan-green-n-500x301.jpg";

export type Item = {
    id: number,
    type: string,
    title: string,
    variants: number,
    color?: string,
    price: number,
    salePrice?: any,
    imgSrc: string,
    badgeText?: string,
    secondBadge?: string,
    itemAmount: number,
    sum?: any,
}
type TypeState = {
    items: Item[],
    totalSum: number,
    totalItems: number,
    sideBarIsOpen: boolean
}
const initialState: TypeState = {
    items: [],
    totalSum: 0,
    totalItems: 0,
    sideBarIsOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<Item>) {
            const newItem = action.payload
            const amount = newItem.itemAmount || 1
            const itemPrice = newItem.salePrice || newItem.price
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalSum += itemPrice * amount
            state.totalItems += amount
            state.sideBarIsOpen = true
            if (!existingItem) {
                state.items.push({...newItem, itemAmount: amount, sum: itemPrice * amount})
            } else {
                existingItem.itemAmount += amount
                existingItem.sum += itemPrice * amount
            }
        },
        deleteItemFromCart(state, action: PayloadAction<Item>) {
            const newItem = action.payload
            const itemPrice = newItem.salePrice || newItem.price
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!!existingItem) {
                state.totalSum -= itemPrice * existingItem.itemAmount
                state.totalItems -= existingItem.itemAmount
                state.items = state.items.filter(item => item.id !== existingItem.id)
            }
        },
        setAmountFromInput(state, action: PayloadAction<Item>) {
            const newItem = action.payload
            const itemAmount = newItem.itemAmount
            const itemPrice = newItem.salePrice || newItem.price
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (existingItem) {
                state.totalSum = 0
                state.totalItems = 0
                if (itemAmount === 0) {
                    state.items = state.items.filter(item => item.id !== existingItem.id)

                } else {
                    existingItem.itemAmount = itemAmount
                    existingItem.sum = itemPrice * itemAmount
                }

                state.items.forEach(item => {
                    state.totalSum += (item.salePrice || item.price) * item.itemAmount
                    state.totalItems += item.itemAmount
                })
            }
        },
        openSidebar(state) {
            state.sideBarIsOpen = true
        },
        closeSidebar(state) {
            state.sideBarIsOpen = false
        },

    }
})

export const cartSliceActions = cartSlice.actions
export const cartSliceReducer = cartSlice.reducer

export default cartSlice