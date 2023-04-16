import React, {FC, useState} from 'react';
import classes from "../ProductItem.module.css";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {favouritesSliceActions} from "../../../../store/favouritesSlice";
import {compareSliceActions} from "../../../../store/compareSlice";
import {ProductItemProps} from "../ProductItem";
import {detailsSliceActions} from "../../../../store/detailsSlice";

const FavouritesSection:FC<ProductItemProps> = (props) => {
    const dispatch = useAppDispatch()
    const item = {...props}
    const onToggleFavourites = () => {
        dispatch(favouritesSliceActions.toggleFavourites(item))
    }
    const onToggleCompare = () => {
        dispatch(compareSliceActions.toggleCompare(item))
    }
    const onOpenDetails = () => {
        dispatch(detailsSliceActions.openDetails())
    }
    return (
        <div className={classes.favouritesWrapper}>
            <button onClick={onToggleFavourites} className={classes.favourites}></button>
            <button onClick={onOpenDetails} className={classes.details}></button>
            <button onClick={onToggleCompare} className={classes.compare}></button>
        </div>
    );
};

export default FavouritesSection;