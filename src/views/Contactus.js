import React from "react";
import {Form,Input,Button} from "antd";
import {Typography} from "antd";


const {Title,Text}=Typography;
const {TextArea}=Input;

const Contact=()=>{
    return (
        <div style={{width:'100%',height:'auth', padding:"10px 100px",marginTop:"10rem", backgroundColor:'gray',display:"flex"}}>
<div className="get-in-touch" style={{width:"30%",postion:"relative",left:"20px"}}>
<Title level={4}>Phone</Title>
<Text>+250788504212</Text>
<Title level={4}>Email</Title>
<Text>josianenzmksh@gmail</Text>
<Title level={4}>LinkedIn</Title>
<Text>Nzamukosha Josiane</Text>

</div>

     <Form style={{width:"50%",backgroundColor:'grey'}}>
        <Form.Item ><Input placeholder="Enter your username" /></Form.Item>

        <Form.Item ><Input placeholder="Enter your Email" /></Form.Item>
        <Form.Item>
        <TextArea rows={4}placeholder="Enter your message"/></Form.Item>
        <Form.Item >
            <Button>Send message</Button>
      </Form.Item>
        
    </Form>
    <div>
<h4>for more info</h4>
<text>don't hesitate to contact us on our social media</text>

    </div>
    </div>
    )
}
export default Contact;