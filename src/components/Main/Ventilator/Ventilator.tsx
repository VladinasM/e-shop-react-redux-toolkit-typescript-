import React, {useEffect, useState} from 'react';
import classes from './Ventilator.module.css'
import ProductItem from "../ProductItem/ProductItem";
import {DataType} from "../Sensor/Sensor";


const getData = async () => {
    const data = await fetch('./src/components/Main/Ventilator/ventilator.json')
    return data.json()
}

const Ventilator = () => {
    const [DATA, setDATA] = useState<DataType[]>([]);

    useEffect(() => {
        getData().then(res => setDATA(res))
    }, []);

    return (
        <section className={classes.section}>
            <h2 className={classes.title}>Свет</h2>
            <div className={classes.itemsWrapper}>
                {DATA.map(item =>
                    <ProductItem key={item.id}
                                 id={item.id}
                                 title={item.title}
                                 price={item.price}
                                 salePrice={item.salePrice}
                                 imgSrc={item.imgSrc}
                                 badgeText={item.badgeText}
                    />)}
            </div>
        </section>
    );
};

export default Ventilator;