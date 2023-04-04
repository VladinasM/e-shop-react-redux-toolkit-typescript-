import React from 'react';
import classes from './LoginForm.module.css'
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    return (
        <form className={classes.loginForm}>
            <p className={classes.emailWrapper}>
                <label htmlFor="email">Имя пользователя или Email<span> *</span></label>
                <input className={classes.email} id='email' type="text"/>
            </p>
            <p className={classes.passwordWrapper}>
                <label htmlFor="password">Пароль<span> *</span></label>
                <input className={classes.password} id='password' type="text"/>
            </p>
            <label className={classes.rememberMeLabel} htmlFor="rememberMe">
                <input className={classes.rememberMe} id='rememberMe' type="checkbox"/>
                <span>Запомнить меня</span>
            </label>
            <button className={classes.formBtn}>Войти</button>
            <p className={classes.forgetLinkWrapper}>
                <NavLink className={classes.forgetLink} to='./lost-password'>Забыли свой пароль?</NavLink>
            </p>
        </form>
    );
};

export default LoginForm;