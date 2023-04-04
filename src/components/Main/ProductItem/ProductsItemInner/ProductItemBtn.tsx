import React, {FC} from 'react';
import classes from '../ProductItem.module.css'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {cartSliceActions} from "../../../../store/cartSlice";

interface ProductItemBtnProps {
    text: any,
    item: any
}

const ProductItemBtn:FC<ProductItemBtnProps> = ({text, item}) => {
    const dispatch = useAppDispatch()
    const onAddHandler = () => {
        dispatch(cartSliceActions.addItemToCart(item))
    }
    return (
        <div className={classes.btn}>
            {text==='Выберите параметры' && <Link className={classes['btn-link']} to='/cart'>{text}</Link>}
            {text==='В корзину' && <button onClick={onAddHandler} className={classes['btn-link']}>{text}</button>}
        </div>
    );
};

export default ProductItemBtn;