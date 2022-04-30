import React from "react";
import {Routes , Route} from "react-router-dom"

import Home from "../Home";
import About from "../About";
import Navigation from "../Navigation";
import RoadMap from '../RoadMap'
import ProductsPage from "../ProductsPage";
import Signup from "../Signup";
import Login from "../Login";
import PersonalAccount from "../PersonalAccount"



const App =()=>{
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/roadmap" exact element={<RoadMap />} />
                <Route path="/products" exact element={<ProductsPage />} />
                <Route path="/signup" exact element={<Signup />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/account/personal" exact element={<PersonalAccount/>}/>
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    )
}

export default App