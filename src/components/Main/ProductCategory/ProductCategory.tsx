import React, {FC, useEffect, useState} from 'react';
import classes from './ProductCategory.module.css'
import mainSection from '../MainSection.module.css'
import ProductItem, {ProductItemProps} from "../ProductItem/ProductItem";
import GoToTopOfPage from "../../UIcomponents/GoToTopOfPage";
import {DataType} from "../Sensor/Sensor";

interface TypeProps {
    title?: string,
    itemAmount?: number,

}

const getData = async () => {
    const data = await fetch('../../../src/consts/data.json')
    return data.json()
}

const ProductCategory: FC<TypeProps> = (props) => {
    const [DATA, setDATA] = useState<DataType[]>([]);
    const [items, setItems] = useState<any>([]);
    const [pageQty, setPageQty] = useState(0);
    const [currPage, setCurrPage] = useState<number>(1);
    const pages = []
    const pageSize = 16;

    const onPageHandler = (e?:any) => {
        let page;
        if(e?.target.value){
            page = Number(e.target.value)
            setCurrPage(page)
        } else {
            page = currPage
        }
        const start = pageSize * (page - 1)
        const end = start + pageSize
        const newList = DATA.slice(start, end)
        setItems(newList)
    }
    const nextPageHandler = () => {
        setCurrPage(prevState => prevState + 1)
    }
    const prevPageHandler = () => {
        setCurrPage(prevState => prevState - 1)
    }
    for(let i = 1; i <= pageQty; i++){
        pages.push(i)
    }

    useEffect(() => {
        onPageHandler()
    }, [currPage, DATA]);

    useEffect(() => {
        getData()
            .then(res => {
                setDATA(res)
                setPageQty(Math.ceil(res.length / pageSize))
            })
    }, []);

    return (
        <section className={mainSection.mainSection}>
            <div className={classes.category}>
                <h2 className={classes.categoryTitle}>Магазин</h2>
                <p>Отображение {}</p>
                <select className={classes.select} name="" id="">
                    <option value="">Исходная сортировка</option>
                    <option value="">По популярности</option>
                    <option value="">По рейтингу</option>
                    <option value="">По новизне</option>
                    <option value="">Цены: по возрастанию</option>
                    <option value="">Цены: по убыванию</option>
                </select>
                <div className={classes.itemsWrapper}>
                    {
                        items.map((item:any) =>
                            <ProductItem key={item.id}
                                         id={item.id}
                                         title={item.title}
                                         price={item.price}
                                         salePrice={item.salePrice}
                                         type={item.type}
                                         imgSrc={item.imgSrc}
                                         variants={item.variants}
                                         badgeText={item.badgeText}
                                         cssClass={classes.imgInner}
                            />)
                    }
                </div>
                <div>
                    {currPage !== 1 && <button className={classes.prevBtn} onClick={prevPageHandler}>←</button>}
                    {
                        pages.map(page =>
                            <button key={page}
                                    onClick={onPageHandler}
                                    value={page}
                                    className={`${classes.pagBtn} ${currPage === page && classes.active}`}
                            >
                                {page}
                            </button>)
                    }
                    {currPage !== pageQty && <button className={classes.nextBtn} onClick={nextPageHandler}>→</button>}
                </div>
            </div>
            <GoToTopOfPage/>
        </section>
    );
};

export default ProductCategory;