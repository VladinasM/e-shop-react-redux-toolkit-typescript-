import React, {useState} from 'react';
import classes from './CartMainPage.module.css'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import CartSidebar from "./Sidebar/CartSidebar";
import {cartSliceActions} from "../../store/cartSlice";
import DetailsPopup from "../Main/DetailsPopup/DetailsPopup";

const CartMainPage = () => {
    const dispatch = useAppDispatch()
    const totalItems = useAppSelector(state => state.cartSlice.totalItems)

    const onSidebarHandler = (e: any) => {
        dispatch(cartSliceActions.openSidebar())
        e.target.style.color = 'red'
    }
    const onCartClick = (e: any) => {
        e.target.style.color = 'red'
    }
    return (
        <>
            <button onClick={onSidebarHandler} className={classes.headerCartLink}>
                <span onClick={onCartClick} className={classes.headerCartLinkIco}></span>
                <sup>{totalItems}</sup>
            </button>
            <CartSidebar/>
            <DetailsPopup/>
        </>
    );
};

export default CartMainPage;