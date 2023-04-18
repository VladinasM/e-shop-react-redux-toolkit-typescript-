import React from 'react';
import classes from "../ProductItem/ProductItem.module.css";
import compareClasses from "./CompareItem.module.css";
import ProductItemBtn from "../ProductItem/ProductsItemInner/ProductItemBtn";
import Badge from "../ProductItem/ProductsItemInner/Badge";
import FavouritesSection from "../ProductItem/ProductsItemInner/FavouritesSection";
import {Link} from "react-router-dom";

const CompareItem = ({item}: any) => {
    return (
        <div>
            <article className={classes.item}>
                <div className={classes.imgInner}>
                    <FavouritesSection
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        salePrice={item.salePrice}
                        type={item.type}
                        imgSrc={item.imgSrc}
                        variants={item.variants}
                        badgeText={item.badgeText}
                    />
                    {
                        item.badgeText &&
                      <Badge
                        badgeText={item.badgeText}
                        price={item.price}
                        salePrice={item.salePrice}
                        secondBadge={item.secondBadge}/>
                    }
                    <div className={classes.imgWrapper}>
                        <img src={item.imgSrc} alt=""/>
                        <ProductItemBtn item={item} text={item.variants > 1 ? 'Выберите параметры' : 'В корзину'}/>
                    </div>
                </div>
                <div className={classes.titleWrapper}>
                    <div>
                        <Link className={classes.productLink} to='./'>
                            {item.title}
                        </Link>
                    </div>
                    <div className='d-flex'>
                        <div className={classes.salePrice}>
                            {item.salePrice && `${item.salePrice}₽`}
                        </div>
                        <div className={item.salePrice ? classes.oldPrice : classes.price}>
                            {item.price}₽
                        </div>
                    </div>
                </div>
            </article>
            {
                Object.values(item).map(prop => <div className={compareClasses.property}>Свойство</div>)
            }
        </div>
    );
};

export default CompareItem;