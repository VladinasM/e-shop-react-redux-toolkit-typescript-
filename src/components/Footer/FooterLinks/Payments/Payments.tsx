import React from 'react';
import classes from './Payments.module.css'
import payments from '../../../../assets/images/payments.png'

const Payments = () => {
    return (
        <section className={classes.payments}>
            <h2 className={classes.title}>Оплата заказа</h2>
            <p className={classes.startText}>
                Для WooCommerce есть большое количество готовых модулей от платежных систем, которые добавляют новые способы оплаты заказов.
            </p>
            <p className={classes.links}>
                <span>Вы можете выбрать модуль </span>
                <a href="src/components/Footer/FooterLinks/Payments/Payments" target='_blank'>Яндекс.Кассы,</a>
                <a href="src/components/Footer/FooterLinks/Payments/Payments">CloudPayments,</a>
                <a href="https://help.unitpay.ru/article/74-woocommerce-wordpress">UnitPay</a>
                <span>или любой другой.</span>
            </p>
            <figure className={classes.imgWrapper}>
                <img className={classes.paymentImg} src={payments} alt=""/>
            </figure>
            <p className={classes.finalText}>
                Во всех популярных платежных системах и агрегаторах есть готовые модули для WooCommerce и подробные инструкции по установке и настройке.
            </p>
        </section>
    );
};

export default Payments;