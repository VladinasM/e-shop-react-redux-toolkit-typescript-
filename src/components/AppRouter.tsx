import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainSection from "./Main/MainSection";
import App from "../App";
import Cart from "./Main/Cart/Cart";
import Favourites from "./Main/Favourites/Favourites";
import Compare from "./Main/Compare/Compare";
import Payments from "./Footer/FooterLinks/Payments/Payments";
import Oferta from "./Footer/FooterLinks/Payments/Oferta";
import Faq from "./Footer/FooterLinks/Faq/Faq";
import Profile from "./Footer/FooterLinks/Profile/Profile";
import Blog from "./Main/Blog/Blog";
import Shop from "./Main/Shop/Shop";
import {
    BLOG,
    CART,
    VENT_SYSTEM,
    COMPARE,
    SENSOR, FAQ,
    FAVOURITES, VENTILATOR, LOST_PASSWORD,
    OFERTA,
    PAYMENTS,
    PRODUCT_CATEGORY, PROFILE,
    ROOT,
    SHOP
} from "../consts/consts";
import ProductCategory from "./Main/ProductCategory/ProductCategory";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={ROOT} element={<App />} >
                <Route path={ROOT} element={<MainSection />}/>
                <Route path={CART} element={<Cart />}/>
                <Route path={FAVOURITES} element={<Favourites />}/>
                <Route path={SHOP} element={<ProductCategory />}/>
                <Route path={PRODUCT_CATEGORY}>
                    <Route path={SENSOR} element={<ProductCategory />}/>
                    <Route path={VENT_SYSTEM} element={<ProductCategory />}/>
                    <Route path={VENTILATOR} element={<ProductCategory />}/>
                </Route>
                <Route path={COMPARE} element={<Compare />}/>
                <Route path={PAYMENTS} element={<Payments />}/>
                <Route path={OFERTA} element={<Oferta />}/>
                <Route path={FAQ} element={<Faq />}/>
                <Route path={PROFILE} element={<Profile />}/>
                <Route path={LOST_PASSWORD} element={<Profile />}/>
                <Route path={BLOG} element={<Blog />}/>
            </Route>
        </Route>
    )
)
