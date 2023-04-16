import React, {FC} from 'react';
import classes from './LinkTemplate.module.css'

interface LinkTemplateProps {
    text: string,
    onClick?: () => void,
    cssClass?: string
}


const ButtonTemp: FC<LinkTemplateProps> = ({text, onClick, cssClass}) => {
    return (
        <button onClick={onClick} className={classes.linkTemplate + ' ' + cssClass}>
            {text}
        </button>
    );
};

export default ButtonTemp;