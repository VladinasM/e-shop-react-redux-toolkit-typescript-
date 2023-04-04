import React, {useState} from 'react';
import classes from "../ProductItem.module.css";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {favouritesSliceActions} from "../../../../store/favouritesSlice";
import {compareSliceActions} from "../../../../store/compareSlice";

const FavouritesSection = (props:any) => {
    const dispatch = useAppDispatch()
    const item = {...props}
    const onToggleFavourites = () => {
        dispatch(favouritesSliceActions.toggleFavourites(item))
    }
    const onToggleCompare = () => {
        dispatch(compareSliceActions.toggleCompare(item))
    }
    return (
        <div className={classes['favourites-wrapper']}>
            <button onClick={onToggleFavourites} className={`${classes.favourites}  ${props.isInFavourite && classes.inFavourites}`}></button>
            <button onClick={onToggleCompare} className={classes.compare}></button>
        </div>
    );
};

export default FavouritesSection;