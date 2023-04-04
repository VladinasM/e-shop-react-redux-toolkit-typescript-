import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import ProductItem from "../ProductItem/ProductItem";
import classes from './Favourites.module.css'

const Favourites = () => {
    const dispatch = useAppDispatch()
    const items = useAppSelector(state => state.favouritesSlice.items)
    return (
        <section>
            <h2 className={classes.title}>Избранное</h2>
            <p className={classes.info}>Предоставлено {items.length} товара</p>
            {
                items.map(item =>
                    <ProductItem id={item.id}
                                 key={item.id}
                                 type={item.type}
                                 variants={item.variants}
                                 title={item.title}
                                 price={item.price}
                                 salePrice={item.salePrice}
                                 imgSrc={item.imgSrc}
                                 badgeText={item.badgeText}
                    />
                )
            }
        </section>
    );
};

export default Favourites;