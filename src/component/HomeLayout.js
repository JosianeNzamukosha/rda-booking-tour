import React from "react";
import Footer from "./footer";
import Nav from "./navbar";

const HomeLayout=({children})=>{

    return (
        <>
        <Nav/>
        <div style={{minHeight:"100vh"}}>{children}</div>
        <Footer/>
    
        
        </>
    );
    
};
export default HomeLayout;
