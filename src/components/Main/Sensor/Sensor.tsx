import React, {useEffect, useState} from 'react';
import classes from './Sensor.module.css'
import ProductItem from "../ProductItem/ProductItem";


export type DataType = {
    "id": number,
    "title": string,
    "article": string,
    "price": number,
    "salePrice": number,
    "category": string,
    "imgSrc": string,
    "badgeText": string,
    info?: string
}
const getData = async () => {
    const data = await fetch('./src/components/Main/Sensor/sensor.json')
    return data.json()
}
const Sensor = () => {
    const [DATA, setDATA] = useState<DataType[]>([]);

    useEffect(() => {
        getData().then(res => setDATA(res))
    }, []);

    return (
        <section className={classes.section}>
            <h2 className={classes.title}>Автоматика</h2>
            <div className={classes.itemsWrapper}>
                {DATA.map(item =>
                    <ProductItem key={item.id}
                                 id={item.id}
                                 title={item.title}
                                 price={item.price}
                                 article={item.article}
                                 category={item.category}
                                 salePrice={item.salePrice}
                                 imgSrc={item.imgSrc}
                                 badgeText={item.badgeText}
                                 cssClass={classes.imgInner}
                    />)}
            </div>
        </section>
    );
};

export default Sensor;