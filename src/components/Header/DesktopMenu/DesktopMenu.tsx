import React from 'react';
import classes from "./DesktopMenu.module.css";
import {NavLink} from "react-router-dom";
import {BLOG, CHAIRS, DIVANS, PAYMENTS, SHOP} from "../../../consts/consts";

const DesktopMenu = () => {
    return (
        <nav className={classes.topMenu}>
            <ul className={classes.topMenuList}>
                <li>
                    <NavLink className={classes.linkToSubMenu + ' ' + classes.arrow} to={SHOP} end>Магазин</NavLink>
                    <ul className={classes.subMenuList}>
                        <li>
                            <NavLink to={DIVANS}>Диваны</NavLink>
                        </li>
                        <li>
                            <NavLink to={CHAIRS}>Стулья</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink className={classes.linkToSubMenu} to={PAYMENTS}>Оплата заказа</NavLink>
                </li>
                <li>
                    <NavLink className={classes.linkToSubMenu} to={BLOG}>Блог</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default DesktopMenu;