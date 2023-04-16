import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import ProductItem from "../ProductItem/ProductItem";
import classes from './Favourites.module.css'
import mainSection from '../MainSection.module.css'
import ButtonTemp from "../../UIcomponents/ButtonTemp";
import {favouritesSliceActions} from "../../../store/favouritesSlice";

const Favourites = () => {
    const dispatch = useAppDispatch()
    const items = useAppSelector(state => state.favouritesSlice.items)

    const onClearHandler = () => {
        dispatch(favouritesSliceActions.removeAll())
    }
    return (
        <section className={mainSection.mainSection}>
            <div className={classes.favourites}>
                <h2 className={classes.title}>Избранное</h2>
                <p className={classes.info}>{!items.length ? `Нет товаров в избранном` : `Предоставлено ${items.length} товара`}</p>
                <div className={classes.itemsWrapper}>
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
                </div>
                {
                    !!items.length && <ButtonTemp text='Очистить корзину' onClick={onClearHandler}/>
                }
            </div>
        </section>
    );
};

export default Favourites;