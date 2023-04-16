import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Slider from "./Slider/Slider";
import Divan from "./Divans/Divan";
import DivanTwoInRow from "./Divans/DivanTwoInRow";
import Chairs from "./Chairs/Chairs";
import Lamps from "./Lamps/Lamps";
import classes from './MainSection.module.css'
import DetailsPopup from "./DetailsPopup/DetailsPopup";

const MainSection = () => {
    return (
        <main className={classes.mainSection}>
            <Slider/>
            <Divan/>
            {/*<DivanTwoInRow/>*/}
            <Chairs />
            <Lamps/>
        </main>
    );
};

// @ts-ignore
export default MainSection