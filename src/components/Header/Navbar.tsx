import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

    const onSubMenuHandler = () => {
        setIsSubMenuOpen(prevState => !prevState)
    }
    return (
        <nav className="collapse" id="collapseExample">
            <ul className={classes.navList}>
                <button className={`${classes.collapseBtn} ${isSubMenuOpen && classes.open}`}
                        onClick={onSubMenuHandler}
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#collapseSubMenu"
                        aria-expanded="false"
                        aria-controls="collapseExample"></button>
                <li
                    className={`${classes.shopLink} ${isSubMenuOpen && classes.shopLinkOpen}`}>
                    <NavLink className={classes.navLink} to='./shop'>Магазин</NavLink>
                    <ul id="collapseSubMenu"
                        className={`collapse ${classes.subMenu}`}>
                        <li>
                            <NavLink className={classes.navLink} to='./divans'>Диваны</NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.navLink} to='./chairs'>Стулья</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink className={classes.navLink} to='./payments'>Оплата заказа</NavLink>
                </li>
                <li>
                    <NavLink className={`${classes.navLink} ${classes.lastChild}`} to='./blog'>Блог</NavLink>
                </li>
            </ul>
        </nav>

    );
};

export default Navbar;