import React, { useState} from 'react';
import classes from './MenuBurger.module.css'

const MenuBurger = () => {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false)

    const burgerToggle = () => {
        setBurgerIsOpen(prevState => !prevState)
    }


    return (
        <button onClick={burgerToggle}
            className={classes.burgerBtn}
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
        >
            <span className={`${classes.top} ${ burgerIsOpen && classes.open}`}></span>
            <span className={`${classes.mid} ${ burgerIsOpen && classes.open}`}></span>
            <span className={`${classes.bottom} ${ burgerIsOpen && classes.open}`}></span>
        </button>
    );
};

export default MenuBurger;