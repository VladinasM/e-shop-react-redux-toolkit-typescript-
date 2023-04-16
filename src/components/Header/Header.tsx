import React from 'react';
import logoImg from '../../assets/icons/logo-4.png'
import classes from './Header.module.css'
import MenuBurger from "./BurgerMenu/MenuBurger";
import {Link, Outlet} from "react-router-dom";
import CartMainPage from "./CartMainPage";
import {useAppSelector} from "../../store/hooks";
import Navbar from "./Navbar/Navbar";
import GoToTopOfPage from "../UIcomponents/GoToTopOfPage";
import SocialLinks from "../UIcomponents/SocialLinks";
import SearchForm from "./SearchForm";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import {COMPARE, FAVOURITES, ROOT} from "../../consts/consts";

const Header = () => {
    const totalFavourites = useAppSelector(state => state.favouritesSlice.totalFavouritesItems)
    const totalCompare = useAppSelector(state => state.compareSlice.totalCount)

    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <MenuBurger/>
                <div className={classes.imgBlock}>
                    <Link to={ROOT} className={classes.imgWrapper}>
                        <img src={logoImg}/>
                    </Link>
                </div>
                <DesktopMenu/>
                <div className={classes.headerSocials}>
                    <SocialLinks/>
                </div>
                <div className={classes.phone}>
                    <a href="tel:%2B74952002020">
                        +7 495 200 20 20 <br/>
                        <small>с 10:00 до 15:00</small>
                    </a>
                </div>
                <SearchForm/>
                <div className={classes.favouritesWrapper}>
                    <Link to={FAVOURITES}
                          className={`${classes.favourites} ${!!totalFavourites && classes.active}`}>
                        <sup>{totalFavourites}</sup>
                    </Link>
                    <Link to={COMPARE} className={`${classes.compare} ${!!totalCompare && classes.active}`}>
                        <sup>{totalCompare}</sup>
                    </Link>
                </div>
                <CartMainPage/>
            </div>
            <Navbar/>
            <GoToTopOfPage/>
        </header>
    );
};

export default Header;