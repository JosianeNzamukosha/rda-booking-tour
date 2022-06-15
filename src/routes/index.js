import React from "react";
import { Routes,Route} from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Tours from "../views/Tours";
import Contact from "../views/Contactus"
import HomeLayout from "../component/HomeLayout";

const Index=()=>{
    return(
        <HomeLayout>
<Routes>
    <Route exact path="/home" element={<Home/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>
    <Route exact path="/tours" element={<Tours/>}></Route>
    <Route exact path="/contact" element={<Contact/>}></Route>
</Routes>
</HomeLayout>
    )
};
export default Index;