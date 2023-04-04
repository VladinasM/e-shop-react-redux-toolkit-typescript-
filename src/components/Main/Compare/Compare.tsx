import React from 'react';
import classes from './Compare.module.css'
import ProductItemBtn from "../ProductItem/ProductsItemInner/ProductItemBtn";
import {useAppSelector} from "../../../store/hooks";
import CompareItem from "./CompareItem";

const Compare = () => {
    const items = useAppSelector(state => state.compareSlice.items)
    return (
        <section>
            <h2 className='text-center fw-bold mb-4'>Сравнить товары</h2>
            <div className='d-flex overflow-scroll'>
                {
                    items.map(item =>
                        <CompareItem item={item}/>
                    )
                }
            </div>

        </section>
    );
};

export default Compare;