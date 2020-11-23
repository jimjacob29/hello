import React from "react";
import {TextField} from '@material-ui/core';

export default function Input(props){
    console.log(props);
    const [obj,setObj] = React.useState({label:"",details:""});
    const handleChange = (event,type)=>{
        console.log("entered");
        if(type==="title"){
            obj["label"]=event.target.value;
        }
        else{
            obj["details"]=event.target.value;
        }
        setObj(obj);
        console.log(obj);
    }
    return(
        <div className="center">
            <input onChange={(event)=>{handleChange(event,"title")}} type="text" id="heading" name="heading"  placeholder="Title"/>
            <input onChange={(event)=>{handleChange(event,"details")}} type="text" id="description" name="description" placeholder ="description"/>
            <button onClick={()=>{props.handleSave(obj)}}>Save</button>
        </div>
    )
}