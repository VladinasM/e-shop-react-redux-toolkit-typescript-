import React, {FC} from 'react';
import classes from './DetailsPopup.module.css'
import {createPortal} from "react-dom";
import {ProductItemProps} from "../ProductItem/ProductItem";
import {cartSliceActions} from "../../../store/cartSlice";
import {useAppDispatch} from "../../../store/hooks";
import LinkTemp from "../../UIcomponents/LinkTemp";
import {CART} from "../../../consts/consts";

const DetailsPopup = (props:any) => {
    const dispatch = useAppDispatch()
    const currentPrice = props.salePrice || props.price
    const onAddHandler = () => {
        dispatch(cartSliceActions.addItemToCart({...props}))
    }
    const onOpenHandler = () => {
        dispatch(cartSliceActions.openSidebar())
    }
    return (
        <>
            {
                createPortal(
                    <section className={classes.popupWrapper}>
                        <div className={classes.popupContainer}>
                            <button className={classes.closeBtn}></button>
                            <div className={classes.inner}>
                                <div className={classes.productImg}>
                                    <img src="" alt=""/>
                                </div>
                                <div className={classes.productInfo}>
                                    <h2>{props.title}</h2>
                                    <p>{currentPrice}</p>
                                    <div className={classes.info}>
                                        Европейский дизайн модели позволит создать неповторимую атмосферу уюта и тепла в
                                        вашем доме, при этом добавляя роскоши к интерьеру.
                                    </div>
                                    <form action="">
                                        <div>
                                            <input type="number" min='1' step='1'/>
                                            <LinkTemp  text='В корзину' src={CART}/>
                                            <LinkTemp onClick={onOpenHandler} text='Купить в 1 клик' src='./'/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    ,
                    document.getElementById('details-popup') as HTMLElement
                )
            }
        </>
    );
};

export default DetailsPopup;