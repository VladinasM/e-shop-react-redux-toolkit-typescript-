import React from 'react';
import classes from './SensorTwoInRow.module.css'
import ProductItem from "../ProductItem/ProductItem";
import divanYellow from '../../../assets/images/divan-yellow-n-500x262.jpg'
import divanForest from '../../../assets/images/divan-green-n-500x301.jpg'
import divanLionYellow from '../../../assets/images/divan-lion-500x256.jpg'
import divanKuba from '../../../assets/images/divan-kuba-500x279.jpg'
import divanMilan from '../../../assets/images/divan-milan-500x289.jpg'
import divanSoho from '../../../assets/images/divan-soho-n2-500x290.jpg'
import divanRedVine from '../../../assets/images/divan-red-vine-500x274.jpg'
import divanValencia from '../../../assets/images/divan-valencia-n-500x230.jpg'

const DUMMY_DIVANS = [
    {
        id: 1,
        type: 'sensor',
        title: 'Диван Лион',
        variants: 2,
        color: 'Желтый',
        price: 42990,
        salePrice: '',
        imgSrc: divanLionYellow,
        badgeText: 'Новинка'
    },
    {
        id: 2,
        type: 'sensor',
        title: 'Диван-кровать Сохо',
        variants: 1,
        color: 'Серый',
        price: 39990,
        salePrice: '',
        imgSrc: divanSoho,
        badgeText: ''
    },
    {
        id: 3,
        type: 'sensor',
        title: 'Диван Куба',
        variants: 1,
        color: 'Чёрный',
        price: 39990,
        salePrice: '',
        imgSrc: divanKuba,
        badgeText: ''
    },
    {
        id: 4,
        type: 'sensor',
        title: 'Диван Yellow',
        variants: 1,
        color: 'Желтый',
        price: 29990,
        salePrice: 24990,
        imgSrc: divanYellow,
        badgeText: 'Скидка'
    },
    // {
    //     id: 5,
    //     type: 'sensor',
    //     title: 'Диван Лион',
    //     color: 'З',
    //     price: 42990,
    //     salePrice: '',
    //     imgSrc: divanYellow
    // },
    {
        id: 6,
        type: 'sensor',
        title: 'Диван Валенсия',
        variants: 1,
        color: 'Коричневый',
        price: 89990,
        salePrice: '',
        imgSrc: divanValencia,
        badgeText: ''
    },
    {
        id: 7,
        type: 'sensor',
        title: 'Диван Милан',
        variants: 1,
        color: 'Бежевый',
        price: 79990,
        salePrice: 69990,
        imgSrc: divanMilan,
        badgeText: 'Скидка'
    },
    {
        id: 8,
        type: 'sensor',
        title: 'Диван Red Vine',
        variants: 1,
        color: 'Красный',
        price: 54990,
        salePrice: '',
        imgSrc: divanRedVine,
        badgeText: ''
    },
    {
        id: 9,
        type: 'sensor',
        title: 'Диван Forest',
        variants: 1,
        color: 'Зелёный',
        price: 24990,
        salePrice: '',
        imgSrc: divanForest,
        badgeText: ''
    },
]
const SensorTwoInRow = () => {
    return (
        <div className={classes.divan}>
            {/*<h2 className={classes['sensor-title']}>Диваны</h2>*/}
            {DUMMY_DIVANS.map(divan =>
                <ProductItem key={divan.id}
                             id={divan.id}
                             title={divan.title}
                             price={divan.price}
                             salePrice={divan.salePrice}
                             type={divan.type}
                             imgSrc={divan.imgSrc}
                             variants={divan.variants}
                             badgeText={divan.badgeText}
                />)}
        </div>
    );
};

export default SensorTwoInRow;