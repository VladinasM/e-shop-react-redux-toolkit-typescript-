import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Converter from "../Converter";
import Slider from "./Slider/Slider";
import Divan from "./Divans/Divan";
import DivanTwoInRow from "./Divans/DivanTwoInRow";
import Chairs from "./Chairs/Chairs";
import Lamps from "./Lamps/Lamps";

const Main = () => {
    return (
        <main>
            <Slider/>
            <Divan/>
            {/*<DivanTwoInRow/>*/}
            <Chairs />
            <Lamps/>
        </main>
    );
};

export default Main;