import React, {FC} from 'react';
import classes from "./ItemAmountInput.module.css";
import {cartSliceActions, Item} from "../../../store/cartSlice";
import {useAppDispatch} from "../../../store/hooks";

interface InputItemProps {
    item: Item,
    cssClass?: string,
    onIncrementItemAmount: () => void,
    onDecrementItemAmount: () => void,
    onInputChange: (e?:any) => void,
}
const ItemAmountInput:FC<InputItemProps> = (props) => {

    return (
        <div className={`${classes.inputWrapper} ${props.cssClass}`}>
            <input className={classes.input}
                   value={props.item.itemAmount}
                   type="number"
                   onChange={props.onInputChange}
                   min='0'
                   step='1'
            />
            <button onClick={props.onIncrementItemAmount} className={classes.plusButton}></button>
            <button onClick={props.onDecrementItemAmount} className={classes.minusButton}></button>
        </div>
    );
};

export default ItemAmountInput;