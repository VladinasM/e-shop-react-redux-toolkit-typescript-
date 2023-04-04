import React, {useState} from 'react';
import classes from './CartMainPage.module.css'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import CartSidebar from "./CartSidebar";
import {cartSliceActions} from "../../store/cartSlice";

const CartMainPage = () => {
    const dispatch = useAppDispatch()
    const totalItems = useAppSelector(state => state.cartSlice.totalItems)

    const onSidebarHandler = (e:any) => {
        dispatch(cartSliceActions.openSidebar())
        e.target.style.color = 'red'
    }
    const onCartClick = (e:any) => {
        e.target.style.color = 'red'
    }
    return (
        <>
            <div>
                <button onClick={onSidebarHandler} className={classes['header-cart__link']}>
                    <span onClick={onCartClick} className={classes['header-cart__link-ico']}></span>
                    <sup>{totalItems}</sup>
                </button>
            </div>
            <CartSidebar />
        </>
    );
};

export default CartMainPage;