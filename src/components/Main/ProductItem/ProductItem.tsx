import React, {FC, PropsWithChildren, useState} from 'react';
import classes from './ProductItem.module.css'
import ProductItemBtn from "./ProductsItemInner/ProductItemBtn";
import FavouritesSection from "./ProductsItemInner/FavouritesSection";
import Badge from "./ProductsItemInner/Badge";
import {Link} from "react-router-dom";

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
            <div className={classes.imgInner}>
                <FavouritesSection id={props.id}
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
                  <Badge badgeText={props.badgeText} price={props.price} salePrice={props.salePrice}
                         secondBadge={props.secondBadge}/>
                }
                <div className={classes['img-wrapper']}>
                    <img src={props.imgSrc} alt=""/>
                    {/*<img width="500" height="289"*/}
                    {/*     src="https://bono.wpshop.tech/wp-content/uploads/2019/12/divan-milan-500x289.jpg"*/}
                    {/*     className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async"*/}
                    {/*     loading="lazy"*/}
                    {/*     srcSet="https://bono.wpshop.tech/wp-content/uploads/2019/12/divan-milan-500x289.jpg 500w,*/}
                    {/*      https://bono.wpshop.tech/wp-content/uploads/2019/12/divan-milan-300x173.jpg 300w,*/}
                    {/*      https://bono.wpshop.tech/wp-content/uploads/2019/12/divan-milan-1024x592.jpg 1024w,*/}
                    {/*       https://bono.wpshop.tech/wp-content/uploads/2019/12/divan-milan-768x444.jpg 768w,*/}
                    {/*        https://bono.wpshop.tech/wp-content/uploads/2019/12/divan-milan-640x370.jpg 640w,*/}
                    {/*        https://bono.wpshop.tech/wp-content/uploads/2019/12/divan-milan.jpg 1500w"*/}
                    {/*     sizes="(max-width: 500px) 100vw, 500px">*/}
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
                    <div className={classes['sale-price']}>
                        {props.salePrice && `${props.salePrice}₽`}
                    </div>
                    <div className={props.salePrice ? classes['old-price'] : classes.price}>
                        {props.price}₽
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductItem;