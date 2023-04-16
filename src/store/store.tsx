import {configureStore} from "@reduxjs/toolkit";
import {cartSliceReducer} from "./cartSlice";
import {favouritesSliceReducer} from "./favouritesSlice";
import {compareSliceReducer} from "./compareSlice";
import {detailsSliceReducer} from "./detailsSlice";


const store = configureStore({
    reducer: {
        cartSlice: cartSliceReducer,
        favouritesSlice: favouritesSliceReducer,
        compareSlice: compareSliceReducer,
        detailsSlice: detailsSliceReducer
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch