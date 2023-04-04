import React from 'react';
import classes from './Footer.module.css'
import logo from '../../assets/icons/logo-4.png'
import {NavLink} from "react-router-dom";
import facebookIcon from "../../assets/icons/facebook.svg";
import vkIcon from "../../assets/icons/vkIcon.svg";
import telegramIcon from "../../assets/icons/telegramIcon.svg";
import instaIcon from "../../assets/icons/instaIcon.svg";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <section className={classes.footerInner}>
                <div className={classes.logoWrapper}>
                    <img src={logo} alt=""/>
                    <p>
                        Демо-сайт премиум шаблона Bono.
                        <br/>
                        Информация на сайте исключительно для ознакомления.
                    </p>
                    <p>
                        <small>Материалы сайта приведены для примера и не являются офертой.</small>
                    </p>
                </div>
                <div className={classes.footerNav}>
                    <h4 className={classes.navTitle}>Помощь</h4>
                    <NavLink className={classes.navLink} to='/payments'>Оплата заказа</NavLink>
                    <NavLink className={classes.navLink} to='/oferta'>Публичная оферта</NavLink>
                    <NavLink className={classes.navLink} to='/faq'>Вопросы и ответы</NavLink>
                    <NavLink className={classes.navLink} to='/profile'>Профиль</NavLink>
                    <NavLink className={classes.navLink} to='/payments'>Мои заказы</NavLink>
                </div>
                <div className={classes.footerNav}>
                    <h4 className={classes.navTitle}>Разделы</h4>
                    <NavLink className={classes.navLink} to='/payments'>Диваны</NavLink>
                    <NavLink className={classes.navLink} to='/payments'>Стулья</NavLink>
                    <NavLink className={classes.navLink} to='/payments'>Свет</NavLink>
                    <NavLink className={classes.navLink} to='/payments'>Для офиса</NavLink>
                    <NavLink className={classes.navLink} to='/payments'>На потолок</NavLink>
                    <NavLink className={classes.navLink} to='/payments'>Настольные</NavLink>
                </div>
                <div>
                    <div className={classes.footerLinks}>
                        <a href=""> <img src={facebookIcon} alt=""/></a>
                        <a href=""> <img src={vkIcon} alt=""/> </a>
                        <a href=""> <img src={telegramIcon} alt=""/> </a>
                        <a href=""> <img src={instaIcon} alt=""/> </a>
                    </div>
                    <p className={classes.wordpressBlock}>
                        Сайт работает на WordPress
                        <br/>
                        шаблон Bono.
                    </p>
                    <p>
                        <a className={classes.navLink} href="">Служба поддержки</a>
                        <a className={classes.navLink} href="">Купить этот шаблон</a>
                    </p>
                </div>
            </section>
            <p className={classes.copyright}>

                © 2023 Шаблон для интернет-магазина Bono. Все права защищены. Копирование информации запрещено.
                Информация на сайте не является публичной офертой.

            </p>
        </footer>
    );
};

export default Footer;