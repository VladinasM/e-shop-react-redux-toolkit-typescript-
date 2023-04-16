import React, {FC, PropsWithChildren, useState} from 'react';
import classes from './ProductItem.module.css'
import ProductItemBtn from "./ProductsItemInner/ProductItemBtn";
import FavouritesSection from "./ProductsItemInner/FavouritesSection";
import Badge from "./ProductsItemInner/Badge";
import {Link} from "react-router-dom";
import {createPortal} from "react-dom";
import DetailsPopup from "../DetailsPopup/DetailsPopup";

export interface ProductItemProps extends PropsWithChildren {
    id: number,
    type: string,
    variants: number,
    title: string,
    color?: string,
    price: number,
    salePrice?: any,
    imgSrc: string,
    badgeText?: string,
    secondBadge?: string,
    cssClass?: string
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const cssClass = props.cssClass
    return (
        <article className={classes.item + ' ' + cssClass}>
            <div className={classes.imgInner + ' ' + cssClass}>
                <FavouritesSection
                    id={props.id}
                    title={props.title}
                    price={props.price}
                    salePrice={props.salePrice}
                    type={props.type}
                    imgSrc={props.imgSrc}
                    variants={props.variants}
                    badgeText={props.badgeText}
                />
                {
                    props.badgeText &&
                  <Badge
                    badgeText={props.badgeText}
                    price={props.price}
                    salePrice={props.salePrice}
                    secondBadge={props.secondBadge}/>
                }
                <div className={classes.imgWrapper}>
                    <img src={props.imgSrc} alt=""/>
                    <ProductItemBtn item={props} text={props.variants > 1 ? 'Выберите параметры' : 'В корзину'}/>
                </div>
            </div>
            <div className={classes.titleWrapper}>
                <div>
                    <Link className={classes.productLink} to='./'>
                        {props.title}
                    </Link>
                </div>
                <div className='d-flex'>
                    <div className={classes.salePrice}>
                        {props.salePrice && `${props.salePrice}₽`}
                    </div>
                    <div className={props.salePrice ? classes.oldPrice : classes.price}>
                        {props.price}₽
                    </div>
                </div>
            </div>
        </article>
    )
}
export default ProductItem