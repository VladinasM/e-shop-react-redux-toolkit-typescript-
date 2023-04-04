import React from 'react';
import {createPortal} from "react-dom";
import classes from "./CartSidebar.module.css";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {cartSliceActions, Item} from "../../store/cartSlice";
import LinkTemp from "../UIcomponents/LinkTemp";


const CartSidebar = () => {
    const dispatch = useAppDispatch()
    const {sideBarIsOpen, items, totalSum} = useAppSelector(state => state.cartSlice)

    const onCloseHandler = () => {
        dispatch(cartSliceActions.closeSidebar())
    }
    const onDeleteFromCart = (item: Item) => {
        dispatch(cartSliceActions.deleteItemFromCart(item))
    }
    return (
        <>
            {createPortal(
                <div className={`${classes['cart-sidebar']} ${sideBarIsOpen && classes.open}`}>
                    <div className={classes.title}>Корзина</div>
                    <button onClick={onCloseHandler} className={classes['close-btn']}></button>
                    <div className={classes.content}>
                        <ul className={classes.list}>
                            {
                                items.map(item =>
                                    <li key={item.id} className={classes['list-item']}>
                                        <img src={item.imgSrc} className={classes['product-img']} alt=''/>
                                        <div className={classes.text}>{item.title}</div>
                                        <div className={classes['amount-price']}>
                                            {item.itemAmount} x <br/> {item.salePrice || item.price}₽
                                        </div>
                                        <button onClick={() => {
                                            onDeleteFromCart(item)
                                        }} className={classes['delete-btn']}>×
                                        </button>
                                    </li>)
                            }
                        </ul>
                        {!items.length ?
                            <div>Корзина пуста</div>
                            :
                            <div>
                                <div className={classes.summary}><span>Подытог:</span> {totalSum}₽</div>
                                <div>
                                    <LinkTemp onClick={onCloseHandler}  src='./cart' text={"Просмотр корзины"}/>
                                    <LinkTemp src='./' text={"Оформление заказа"}/>
                                </div>
                            </div>
                        }
                    </div>
                </div>,
                document.getElementById('cart-sidebar') as HTMLElement
            )}
        </>
    );

};

export default CartSidebar;