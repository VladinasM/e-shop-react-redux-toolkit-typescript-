import React from 'react';
import classes from './SuperHeader.module.css'

const SuperHeader = () => {
    return (
        <div className={classes.superHeader}>
            <div className={classes.inner}>
                <div className={classes.address}>г. Москва, пр. Ворошиловский, 119-Б, оф. 220</div>
                <div className={classes.link}>
                    Скидки на <a href="">Диван Куба</a> до конца месяца!
                </div>
            </div>
        </div>
    );
};

export default SuperHeader;