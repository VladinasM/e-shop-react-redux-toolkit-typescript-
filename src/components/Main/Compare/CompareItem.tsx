import React from 'react';
import classes from "./CompareItem.module.css";
import ProductItemBtn from "../ProductItem/ProductsItemInner/ProductItemBtn";
import Badge from "../ProductItem/ProductsItemInner/Badge";
import FavouritesSection from "../ProductItem/ProductsItemInner/FavouritesSection";

const CompareItem = ({item}: any) => {
    return (
        <div className={classes.card}>
            <div className={classes.imgWrapper}>
                <img src={item.imgSrc} alt=""/>
                <div className={classes.favouritesSection}></div>
                <FavouritesSection item={item} />
                <Badge badgeText={item.badgeText} salePrice={item.salePrice} price={item.price} secondBadge={item.secondBadge}/>
                <ProductItemBtn text={item.variants > 1 ? 'Выберите параметры' : 'В корзину'}
                                item={item}/>

            </div>
        </div>
    );
};

export default CompareItem;