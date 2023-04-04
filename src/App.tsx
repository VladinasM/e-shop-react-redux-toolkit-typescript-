import './App.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {Outlet} from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";
import SuperHeader from "./components/SuperHeader/SuperHeader";
import {PureComponent} from "react";



function App() {
    return (
        <div className="App">
            <SuperHeader/>
            <Header/>
            <Outlet/>
            <Footer/>
            {/*<BreadCrumbs />*/}
        </div>
    )
}

export default App