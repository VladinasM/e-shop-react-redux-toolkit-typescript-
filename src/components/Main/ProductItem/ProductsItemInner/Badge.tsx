import React, {FC} from 'react';
import classes from "./Badge.module.css";

interface BadgeProps {
    badgeText?: string,
    price?: number,
    salePrice?: any,
    secondBadge?:string
}

const Badge:FC<BadgeProps> = ({badgeText, price, salePrice, secondBadge}) => {

    const salePercent = salePrice && price ? -Math.ceil(((price - salePrice)/ price) * 100) : 0

    return (
        <div className={classes.badge}>
            {badgeText === 'Новинка' && <div className={classes.new}>{badgeText}</div>}
            {badgeText === 'Скидка' && <div className={classes.sale}>{`${badgeText} ${salePercent}%`}</div>}
            {secondBadge === 'Хит продаж' && <div className={classes.hit}>{secondBadge}</div>}
        </div>
    );
};

export default Badge;