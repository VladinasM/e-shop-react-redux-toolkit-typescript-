import React, {FC} from 'react';
import classes from './BlogItem.module.css'
import {NavLink} from "react-router-dom";

type TypeProps = {
    title: string,
    img: object,
    data: Array<string>,
    text: string
}

const BlogItem:FC<TypeProps> = (props) => {
    return (
        <article className={classes.cardWrapper}>
            <div className={classes.cardBody}>
                <h3 className={classes.cardTitle}>
                    <NavLink to='./blog/page/1'></NavLink>
                    <NavLink to='./blog/page/2'></NavLink>
                </h3>
            </div>
        </article>
    );
};

export default BlogItem;