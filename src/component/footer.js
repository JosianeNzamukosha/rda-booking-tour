import React from "react";
import LogoFooter from"../Assets/images/logo.jpg";
import {FacebookFilled } from "@ant-design/icons";
import {TwitterCircleFilled } from "@ant-design/icons";
import { InstagramFilled} from "@ant-design/icons";
import { LinkedinFilled} from "@ant-design/icons";

import "./footer.css";

const Footer=()=>{
    const date= new Date();
   let Year=date.getFullYear();
    return(
        <>
        <div className="footer-container">
            <div className="logo-column">
                <img src={LogoFooter} alt="" className="logo-img"/>
           
            <div className="icons">
                <FacebookFilled />
                <TwitterCircleFilled />
                <InstagramFilled />
                <LinkedinFilled />
            </div> 
        
            <p className="copyright">Copy Right &copy;{Year} By SheCanCODE, <span>Inc, All right resevrved</span></p></div>
            
        
        <div classname="contact-column">
            <h3 className="footer-title">Contact-US</h3>
            <p>623 kacyiru ST, 2nd floor,kigali Rwanda</p>
            <p ><a href="tel:+250788504212">+250788504212</a></p>
            <p ><a href="mailto:josianenzmksh@gmail.com">josianenzmksh@gmail.com</a></p>
            </div>

        <div classname="acount-column">

            <h3 className="footer-title">Create Acount</h3>
            <p><a href="footer-title">Create acount</a></p>
            <p><a href="">Sign in</a></p>
        </div>

        <div classname="Company-column">

            <h3 className="footer-title">Company</h3>
            <p><a href="">About me</a></p>
            <p><a href="">Carrier</a></p>
            <p><a href="">Partener</a></p>
        </div>

        <div classname="Resource-column">

            <h3 className="footer-title">Resourses</h3>
            <p><a href="">SheCanCODE directory</a></p>
            <p><a href="">Help center</a></p>
            <p><a href="">Privacy & Terms</a></p>
        </div>

        </div>
        </>

    )
}
export default Footer;