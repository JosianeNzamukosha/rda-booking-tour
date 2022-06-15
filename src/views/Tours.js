import React from "react";
import {Card,Image,Space,Typography} from "antd";
import Monkey from "../Assets/images/monkey.jpg";
import "./Tours.css";
import Alltours from "../Assets/Data/Tours.json";
import Singletour from "../component/single-tour";
import { Button, Drawer } from 'antd';
import { useState } from 'react';

const {Text, Title}= Typography;
const Tours=()=>{
  const [showDrawer,setShowDrawer]=useState(false);
  const [seletedTour,setSelectedTour]=useState({});
    return(
      <>
        <div style={{width:'100%',height:'auth', padding:"10px 100px"}}>
            <Card>
                {Alltours.map((tour)=>(
                <Card.Grid className="tour-card-grid"
                 style={{width:"33.3%",minHeight:"30rem", textAlign:'center'}}>
                <Space direction="vertical">
                    <Image preview={true} src={tour.photo}></Image>
                    <Title level={4} style={{color:'blue'}}>{tour.title.toUpperCase()}</Title>
                    <Text type="secondary">{tour.description}</Text>
                   
                  <Space >
                    <Text strong>Due Date:</Text>
                    <Text strong>{tour.duedate}</Text>
                    <Text strong>{tour.amount}</Text>
                    
                  </Space>
                  <Button 
                     onClick={()=>{
                    setSelectedTour(tour);
                    setShowDrawer(true)}}> BOOK NOW</Button>
                  
                   </Space>
                </Card.Grid>
                   )) }
            </Card>
            
        </div>
        <Drawer title="single Tour"
        placement="right"
        onClose={()=>{setShowDrawer(false)}}
        visible={showDrawer}>
          <Singletour data={seletedTour}></Singletour>
        </Drawer>
        </>
    )
}
export default Tours;