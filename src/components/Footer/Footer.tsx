import React from 'react';
import classes from './Footer.module.css'
import logo from '../../assets/icons/logo-4.png'
import {NavLink} from "react-router-dom";
import SocialLinks from "../UIcomponents/SocialLinks";
import {CHAIRS, DIVANS, FAQ, LAMPS, OFERTA, PAYMENTS, PROFILE, SHOP} from "../../consts/consts";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <section className={classes.innerWrapper}>
                <div className={classes.footerInner}>
                    <div className={classes.logoWrapper}>
                        <p>
                            <img src={logo} alt=""/>
                        </p>
                        <p className={classes.footerInfo}>
                            Демо-сайт премиум шаблона Bono.
                            <br/>
                            Информация на сайте исключительно для ознакомления.
                        </p>
                        <p className={classes.footerInfo}>
                            <small>Материалы сайта приведены для примера и не являются офертой.</small>
                        </p>
                    </div>
                    <div className={classes.footerNav}>
                        <h4 className={classes.navTitle}>Помощь</h4>
                        <NavLink className={classes.navLink} to={PAYMENTS}>Оплата заказа</NavLink>
                        <NavLink className={classes.navLink} to={OFERTA}>Публичная оферта</NavLink>
                        <NavLink className={classes.navLink} to={FAQ}>Вопросы и ответы</NavLink>
                        <NavLink className={classes.navLink} to={PROFILE}>Профиль</NavLink>
                        <NavLink className={classes.navLink} to={PROFILE}>Мои заказы</NavLink>
                    </div>
                    <div className={classes.footerNav}>
                        <h4 className={classes.navTitle}>Разделы</h4>
                        <NavLink className={classes.navLink} to={DIVANS}>Диваны</NavLink>
                        <NavLink className={classes.navLink} to={CHAIRS}>Стулья</NavLink>
                        <NavLink className={classes.navLink} to={LAMPS}>Свет</NavLink>
                        <NavLink className={classes.navLink} to={LAMPS}>Для офиса</NavLink>
                        <NavLink className={classes.navLink} to={LAMPS}>На потолок</NavLink>
                        <NavLink className={classes.navLink} to={LAMPS}>Настольные</NavLink>
                    </div>
                    <div className={classes.footerWidget}>
                        <div className={classes.footerLinks}>
                            <SocialLinks/>
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
                </div>
                <p className={classes.copyright}>

                    © 2023 Шаблон для интернет-магазина Bono. Все права защищены. Копирование информации запрещено.
                    Информация на сайте не является публичной офертой.

                </p>
            </section>
        </footer>
    );
};

export default Footer;