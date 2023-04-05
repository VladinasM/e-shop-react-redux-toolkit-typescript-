import React, {useState} from 'react';
import logoImg from '../../assets/icons/logo-4.png'
import classes from './Header.module.css'
import facebookIcon from '../../assets/icons/facebook.svg'
import vkIcon from '../../assets/icons/vkIcon.svg'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import instaIcon from '../../assets/icons/instaIcon.svg'
import MenuBurger from "./MenuBurger";
import {Link, Outlet} from "react-router-dom";
import CartMainPage from "./CartMainPage";
import {useAppSelector} from "../../store/hooks";
import Navbar from "./Navbar";
import GoToTopOfPage from "../UIcomponents/GoToTopOfPage";

const Header = () => {
    const totalFavourites = useAppSelector(state => state.favouritesSlice.totalFavouritesItems)
    const totalCompare = useAppSelector(state => state.compareSlice.totalCount)

    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <MenuBurger/>
                <Link to='./' className={classes.imgWrapper}>
                    <img src={logoImg}/>
                </Link>
                <CartMainPage/>
                <div className={classes.headerSocials}>
                    <a href=""> <img src={facebookIcon} alt=""/></a>
                    <a href=""> <img src={vkIcon} alt=""/> </a>
                    <a href=""> <img src={telegramIcon} alt=""/> </a>
                    <a href=""> <img src={instaIcon} alt=""/> </a>
                </div>
                <div className={classes.headerBottom}>
                    <div className={classes.phone}>
                        <a href="tel:%2B74952002020">
                            +7 495 200 20 20 <br/>
                            <small>с 10:00 до 15:00</small>
                        </a>
                    </div>
                    <div className={classes.favouritesWrapper}>
                        <Link to='./favourites'
                              className={`${classes.favourites} ${!!totalFavourites && classes.active}`}>
                            <sup>{totalFavourites}</sup>
                        </Link>
                        <Link to='./compare' className={`${classes.compare} ${!!totalCompare && classes.active}`}>
                            <sup>{totalCompare}</sup>
                        </Link>
                    </div>
                </div>
                <Navbar/>
            </div>
            <GoToTopOfPage/>
        </header>
    );
};

export default Header;