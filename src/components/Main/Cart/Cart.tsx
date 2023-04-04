import React, {useEffect, useState} from 'react';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {useAppSelector} from "../../../store/hooks";
import CartItem from "./CartItem";
import classes from './Cart.module.css'

const Cart = () => {
    const items = useAppSelector(state => state.cartSlice.items)
    // const totalItems = useAppSelector(state => state.cartSlice.totalItems)

    return (
        <div className={classes['cart-wrapper']}>
            <h2 className={classes['cart-title']}>Корзина</h2>
            <div>Корзина обновлена</div>
            {
                items.map(item => <CartItem key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Cart;