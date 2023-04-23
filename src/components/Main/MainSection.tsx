import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Slider from "./Slider/Slider";
import Sensor from "./Sensor/Sensor";
import SensorTwoInRow from "./Sensor/SensorTwoInRow";
import VentSystem from "./VentSystem/VentSystem";
import Ventilator from "./Ventilator/Ventilator";
import classes from './MainSection.module.css'
import DetailsPopup from "./DetailsPopup/DetailsPopup";

const MainSection = () => {
    return (
        <main className={classes.mainSection}>
            <Slider/>
            <Sensor/>
            {/*<SensorTwoInRow/>*/}
            <VentSystem />
            <Ventilator/>

        </main>
    );
};

// @ts-ignore
export default MainSection