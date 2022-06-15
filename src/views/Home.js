import React from "react";
import Nav from "../component/navbar";
import Gorilla from "../Assets/images/gorilla.jpg";
import Beach from "../Assets/images/beach.jpg";
import Zebra from "../Assets/images/zebra.jpg";
import Kanopi from "../Assets/images/kanopi.jpg";
import "../views/Home.css";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
// import Footer from"../component/footer";
import HomeLayout from "../component/HomeLayout";


const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: 'green',
    }}
  />
);
const onSearch = (value) => console.log(value);
const Home=()=>{
    return(
      <>
     
        <div className="homecontainer">
        
            <div className="home-content">
                <h1 className="heading-title">Rwanda Booking Tour</h1>
                <div className="carousel-img">
                <Carousel autoplay>
                    <img src={Gorilla} alt="gorilla image"/>
                    <img src={Beach} alt="Beach image"/>
                    <img src={Zebra} alt="Zebra image"/>
                    <img src={Kanopi} alt="kanopi image"/>

                </Carousel>

                 <Search
      placeholder="Search Tour"
      enterButton="Search" 
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
    
<h3 className="toptour">Top Tours</h3>
<hr className="align"></hr>
</div>     
            </div>
           
        </div>
        
        </>
    )
};

export default Home;