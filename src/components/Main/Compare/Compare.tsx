import React from 'react';
import classes from './Compare.module.css'
import mainSection from '../MainSection.module.css';
import ProductItemBtn from "../ProductItem/ProductsItemInner/ProductItemBtn";
import {useAppSelector} from "../../../store/hooks";
import CompareItem from "./CompareItem";
import ProductItem from "../ProductItem/ProductItem";

const Compare = () => {
    const items = useAppSelector(state => state.compareSlice.items)
    return (
        <section className={mainSection.mainSection}>
            <h2 className='text-center fw-bold mb-4'>Сравнить товары</h2>
            <div className='d-flex'>
                {
                    items.map(item =>
                        // <ProductItem id={item.id} type={item.type} variants={item.variants} title={item.title} price={item.price} imgSrc={item.imgSrc}/>
                        <CompareItem key={item.id} item={item}/>
                    )
                }
            </div>

        </section>
    );
};

export default Compare;