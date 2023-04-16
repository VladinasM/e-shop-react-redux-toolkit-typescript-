import React, {FC} from 'react';
import {Link} from "react-router-dom";
import classes from './LinkTemplate.module.css'

interface LinkTemplateProps {
    text: string,
    src: string,
    onClick?: () => void
}


const LinkTemp: FC<LinkTemplateProps> = ({text, src, onClick}) => {
    return (
        <Link onClick={onClick} to={src} className={classes.linkTemplate}>
            {text}
        </Link>
    );
};

export default LinkTemp;