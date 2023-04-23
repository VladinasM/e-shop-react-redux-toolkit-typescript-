import React, {FC} from 'react';
import classes from './DetailsPopup.module.css'
import {createPortal} from "react-dom";
import {cartSliceActions} from "../../../store/cartSlice";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import LinkTemp from "../../UIcomponents/LinkTemp";
import {CART} from "../../../consts/consts";
import {detailsSliceActions} from "../../../store/detailsSlice";
import ItemAmountInput from "../Cart/ItemAmountInput";

const DetailsPopup = () => {
    const dispatch = useAppDispatch()
    const {isOpen, currentItem} = useAppSelector(state => state.detailsSlice)
    console.log(currentItem)

    const onAddHandler = () => {
        dispatch(cartSliceActions.addItemToCart(currentItem))
        dispatch(detailsSliceActions.closeDetails())
        dispatch(cartSliceActions.closeSidebar())
    }
    const onOpenHandler = () => {
        dispatch(detailsSliceActions.openDetails(currentItem))
    }
    const onCloseHandler = (e?: any) => {
        if (e.currentTarget === e.target) {
            dispatch(detailsSliceActions.closeDetails())
        }
    }
    const onIncrementItemAmount = () => {
        dispatch(detailsSliceActions.setAmountInput({...currentItem, itemAmount: currentItem.itemAmount + 1}))
    }
    const onDecrementItemAmount = () => {
        if (currentItem.itemAmount <= 1) {
            dispatch(detailsSliceActions.setAmountInput({...currentItem, itemAmount: 1}))
            return
        }
        dispatch(detailsSliceActions.setAmountInput({...currentItem, itemAmount: currentItem.itemAmount - 1}))
    }
    const onInputChange = (e: any) => {
        const val = +e.target.value
        if (val < 1) {
            dispatch(detailsSliceActions.setAmountInput({...currentItem, itemAmount: 1}))
            return
        }
        dispatch(detailsSliceActions.setAmountInput({...currentItem, itemAmount: +val}))
    }
    const onSubmitHandler = (e: any) => {
        e.preventDefault()
    }

    return (
        <>
            {
                createPortal(
                    <section onClick={onCloseHandler} className={`${classes.popupWrapper} ${isOpen && classes.open}`}>
                        <div className={classes.popupContainer}>
                            <button onClick={onCloseHandler} className={classes.closeBtn}/>
                            <div className={classes.inner}>
                                <div className={classes.productImg}>
                                    <img src={currentItem.imgSrc} alt=""/>
                                </div>
                                <div className={classes.productInfo}>
                                    <h2>{currentItem.title}</h2>
                                    <div className={classes.priceWrapper}>
                                        <div className={classes.salePrice}>
                                            {currentItem.salePrice && `${currentItem.salePrice}₽`}
                                        </div>
                                        <div className={currentItem.salePrice ? classes.oldPrice : classes.price}>
                                            {currentItem.price}₽
                                        </div>
                                    </div>
                                    {currentItem.info && <div className={classes.info}>{currentItem.info}</div>}
                                    <form onSubmit={onSubmitHandler}>
                                        <div className={classes.formInner}>
                                            <ItemAmountInput
                                                item={currentItem}
                                                onIncrementItemAmount={onIncrementItemAmount}
                                                onDecrementItemAmount={onDecrementItemAmount}
                                                onInputChange={onInputChange}
                                            />
                                            <LinkTemp onClick={onAddHandler} cssClass={classes.formLink}
                                                      text='В корзину' src={CART}/>
                                            <LinkTemp onClick={onOpenHandler} cssClass={classes.formLink}
                                                      text='Купить в 1 клик' src='./'/>
                                        </div>
                                    </form>
                                    <div>
                                        Артикул: {currentItem.article} <br/>
                                        Категория: {currentItem.category}
                                    </div>
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