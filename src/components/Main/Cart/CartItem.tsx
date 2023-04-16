import React, {FC, useEffect, useRef, useState} from 'react';
import classes from './CartItem.module.css'
import {useAppDispatch} from "../../../store/hooks";
import {cartSliceActions, Item} from "../../../store/cartSlice";
import {useSelector} from "react-redux";

interface CartItemProps {
    item: Item
}

const CartItem: FC<CartItemProps> = ({item}) => {
    const dispatch = useAppDispatch()
    const itemAmount = item.itemAmount

    const onIncrementItemAmount = () => {
        dispatch(cartSliceActions.setAmountFromInput({...item, itemAmount: itemAmount + 1}))
    }
    const onDeleteFromCart = () => {
        dispatch(cartSliceActions.deleteItemFromCart(item))
    }
    const onDecrementItemAmount = () => {
        dispatch(cartSliceActions.setAmountFromInput({...item, itemAmount: itemAmount - 1}))
    }
    const onInputChange = (e: any) => {
        const val = e.target.value
        if (val === '') {
            console.log('empty')
            return
        }
        dispatch(cartSliceActions.setAmountFromInput({...item, itemAmount: +val}))
    }

    return (
        <tr className={classes.cartItem}>
            <td className={classes.productThumbnail}>
                <img className={classes.cartItemImg} src={item.imgSrc} alt=""/>
            </td>
            <td className={classes.productName} data-title="Товар">
                {item.title}
            </td>
            <td className={classes.productPrice} data-title="Цена">
                {item.salePrice || item.price}₽
            </td>
            <td className={classes.productQuantity} data-title="Количество">
                <div className={classes.inputWrapper}>
                    <input className={classes.input}
                           value={itemAmount}
                           type="number"
                           onChange={onInputChange}
                           min='0'
                           step='1'
                    />
                    <button onClick={onIncrementItemAmount} className={classes.plusButton}></button>
                    <button onClick={onDecrementItemAmount} className={classes.minusButton}></button>
                </div>
            </td>
            <td className={classes.productSubtotal} data-title="Итого">
                <strong>{item.sum}₽</strong>
            </td>
            <td className={classes.productRemove}>
                <button onClick={onDeleteFromCart} className={classes.deleteBtn}>×</button>
            </td>
        </tr>
    );
};

export default CartItem;