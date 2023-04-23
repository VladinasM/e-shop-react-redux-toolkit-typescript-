import React, {useEffect, useState} from 'react';
import classes from './VentSystem.module.css'
import ProductItem from "../ProductItem/ProductItem";

import {DataType} from "../Sensor/Sensor";

const getData = async () => {
    const data = await fetch('./src/components/Main/VentSystem/ventSystem.json')
    return data.json()
}

const VentSystem = () => {
    const [DATA, setDATA] = useState<DataType[]>([]);

    useEffect(() => {
        getData().then(res => setDATA(res))
    }, []);

    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Вентиляционные установки Aelita</h2>
            <div className={classes.itemsWrapper}>
                {DATA.map(item =>
                    <ProductItem key={item.id}
                                 id={item.id}
                                 title={item.title}
                                 price={item.price}
                                 article={item.article}
                                 category={item.category}
                                 info={item.info}
                                 salePrice={item.salePrice}
                                 imgSrc={item.imgSrc}
                                 badgeText={item.badgeText}
                                 cssClass={classes.chairMb}
                    />)}
            </div>
        </div>
    );
};

export default VentSystem;