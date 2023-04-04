import React, {FC, useEffect, useRef, useState} from 'react';
import classes from './CartItem.module.css'
import {useAppDispatch} from "../../../store/hooks";
import {cartSliceActions, Item} from "../../../store/cartSlice";

interface CartItemProps {
    item: Item
}

const CartItem: FC<CartItemProps> = ({item}) => {
    const dispatch = useAppDispatch()
    const [inputVal, setInputVal] = useState<number>(item.itemAmount)

    const onIncrementItemAmount = () => {
        setInputVal(prevState => +prevState + 1)
        // dispatch(cartSliceActions.incrementItemAmount(item))
    }
    const onDeleteFromCart = () => {
        dispatch(cartSliceActions.deleteItemFromCart(item))
    }
    const onDecrementItemAmount = () => {
        setInputVal(prevState => prevState - 1)
        // dispatch(cartSliceActions.decrementItemAmount(item))
    }
    const onInputChange = (e: any) => {
        setInputVal(e.target.value)
        console.log('text')
        setTimeout(() => {
            dispatch(cartSliceActions.setAmountFromInput({...item, itemAmount: +inputVal}))
        }, 300)
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         dispatch(cartSliceActions.setAmountFromInput({...item, itemAmount: +inputVal}))
    //     }, 300)
    //
    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [inputVal])
    return (
        <div className={classes['item-wrapper']}>
            <div className={classes['delete-btn-wrapper']}>
                <img className={classes['cart-item-img']} src={item.imgSrc} alt=""/>
                <button onClick={onDeleteFromCart} className={classes['delete-btn']}>×</button>
            </div>
            <div className={classes.property}>
                <span>Товар:</span>
                {item.title}
            </div>
            <div className={classes.property}>
                <span>Цена:</span>
                {item.salePrice || item.price}
            </div>
            <div className={classes.property}>
                <span>Количество:</span>
                <div className={classes['input-wrapper']}>
                    <input className={classes.input}
                           value={inputVal}
                           type="number"
                           onChange={onInputChange}
                    />
                    <button onClick={onIncrementItemAmount} className={classes['plus-button']}></button>
                    <button onClick={onDecrementItemAmount} className={classes['minus-button']}></button>
                </div>
            </div>
            <div className={classes.property}>
                <span>Итого:</span>
                {item.sum}
            </div>
        </div>
    );
};

export default CartItem;