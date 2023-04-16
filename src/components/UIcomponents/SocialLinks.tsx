import React from 'react';
import classes from "../UIcomponents/SocialLinks.module.css";
import facebookIcon from "../../assets/icons/facebook.svg";
import vkIcon from "../../assets/icons/vkIcon.svg";
import telegramIcon from "../../assets/icons/telegramIcon.svg";
import instaIcon from "../../assets/icons/instaIcon.svg";

const SocialLinks = () => {
    return (
        <>
            <a className={classes.facebookLink} href=""> <img src={facebookIcon} alt=""/></a>
            <a className={classes.vkLink} href=""> <img src={vkIcon} alt=""/> </a>
            <a className={classes.telegramLink} href=""> <img src={telegramIcon} alt=""/> </a>
            <a className={classes.instaLink} href=""> <img src={instaIcon} alt=""/> </a>
        </>
    );
};

export default SocialLinks;