import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Main from "./Main/Main";
import App from "../App";
import Cart from "./Main/Cart/Cart";
import Favourites from "./Main/Favourites/Favourites";
import Compare from "./Main/Compare/Compare";
import Payments from "./Footer/FooterLinks/Payments/Payments";
import Oferta from "./Footer/FooterLinks/Payments/Oferta";
import Faq from "./Footer/FooterLinks/Faq/Faq";
import Profile from "./Footer/FooterLinks/Profile/Profile";
import Blog from "./Main/Blog/Blog";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<App />} >
                <Route path='/' element={<Main />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/favourites' element={<Favourites />}/>
                <Route path='/shop' element={<Favourites />}/>
                <Route path='/compare' element={<Compare />}/>
                <Route path='/payments' element={<Payments />}/>
                <Route path='/oferta' element={<Oferta />}/>
                <Route path='/faq' element={<Faq />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/lost-password' element={<Profile />}/>
                <Route path='/blog' element={<Blog />}/>
            </Route>
            {/*<Route path='/main/m' element={<Main />}/>*/}
            {/*<Route path='/home' element={<Home />} />*/}
            {/*<Route path='/converter' element={<Converter />} />*/}
            {/*/!*<Route path='/cart' element={<Cart />} />*!/*/}
            {/*<Route path='/favourites' element={<Converter />} />*/}
            {/*<Route path='/favourites' element={<Converter />} />*/}
        </Route>
    )
)
