import React, {useEffect, useState} from 'react';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {useAppSelector} from "../../../store/hooks";
import CartItem from "./CartItem";
import classes from './Cart.module.css'
import mainSection from '../MainSection.module.css'
import ButtonTemp from "../../UIcomponents/ButtonTemp";

const Cart = () => {
    const {items, totalSum} = useAppSelector(state => state.cartSlice)

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
    }

    return (
        <section className={mainSection.mainSection}>
            <div className={classes.cartWrapper}>
                <h2 className={classes.cartTitle}>Корзина</h2>
                <div>Корзина обновлена</div>
                <div className={classes.cartContent}>
                    <form onSubmit={onSubmitHandler} className={classes.formTable}>
                        <table className={classes.cartTable}>
                            <thead>
                            <tr>
                                <th className={classes.productThumbnail}>&nbsp;</th>
                                <th className={classes.productName}></th>
                                <th className={classes.productPrice}>Цена</th>
                                <th className={classes.productQuantity}>Количество</th>
                                <th className={classes.productSubtotal}>Итого</th>
                                <th className={classes.productRemove}>&nbsp;</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                items.map(item => <CartItem key={item.id} item={item}/>)
                            }
                            </tbody>
                        </table>
                    </form>
                    <div className={classes.orderWrapper}>
                        <h3>Сумма заказов</h3>
                        <div className={classes.orderInner}>
                            <div>
                                <p className={classes.orderInfo}>Подытог</p>
                                <p className={classes.orderInfo}>Доставка</p>
                            </div>
                            <div className={classes.orderData}>
                                <p className={classes.orderTotalSum}>{totalSum}₽</p>
                                <div>
                                    <label htmlFor="delivery">
                                        <input id='delivery' name='transfer' type="radio" defaultChecked/>
                                        Бесплатная доставка
                                    </label>
                                    <label htmlFor="pickup">
                                        <input id='pickup' name='transfer' type="radio"/>
                                        Самовывоз
                                    </label>
                                    <p>Варианты доставки будут обновлены при оформлении заказа.</p>
                                    <a className={classes.cost} href="">Рассчитать стоимость доставки</a>
                                </div>
                            </div>
                        </div>
                        <p className={classes.resultSum}>Итого <strong>{totalSum}₽</strong></p>
                        <ButtonTemp text='Оформить заказ' cssClass={classes.orderBtn}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;