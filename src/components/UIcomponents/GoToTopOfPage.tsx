import React, {useEffect, useLayoutEffect} from 'react';
import {useLocation} from "react-router-dom";

const GoToTopOfPage = () => {
    const routePath = useLocation()
    const onTop = () => {
        window.scrollTo(0, 0)
    }
    useLayoutEffect(() => {
        onTop()
    }, [routePath])
    return null
};

export default GoToTopOfPage;