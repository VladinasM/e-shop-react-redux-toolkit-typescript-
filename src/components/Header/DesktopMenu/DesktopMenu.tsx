import React from 'react';
import classes from "./DesktopMenu.module.css";
import {NavLink} from "react-router-dom";
import {BLOG, VENT_SYSTEM, SENSOR, PAYMENTS, SHOP} from "../../../consts/consts";

const DesktopMenu = () => {
    return (
        <nav className={classes.topMenu}>
            <ul className={classes.topMenuList}>
                <li>
                    <NavLink className={classes.linkToSubMenu + ' ' + classes.arrow} to={SHOP} end>Магазин</NavLink>
                    <ul className={classes.subMenuList}>
                        <li>
                            <NavLink to={SENSOR}>Датчики</NavLink>
                        </li>
                        <li>
                            <NavLink to={VENT_SYSTEM}>Вентиляторы</NavLink>
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