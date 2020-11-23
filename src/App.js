
import React from "react";
import './App.css';
import Input from './components/input';
import { Switch,Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Home from "./components/home";

function App(props) {
  const trial=[{id:1,label:"trial",details:"trial details"}]
  const[lists,setList]= React.useState([])
  let history = useHistory();

  const handleSave=(data)=>{
    const obj={};
    const length = lists.length;
    if(length===0){
      obj["id"]=1;
    }
    else{
      obj["id"]=lists[length-1].id+1;
    }
    
    obj["label"] = data.label;
    obj["details"] = data.details;
    const tempList =[...lists];
    tempList.push(obj);
    setList(tempList);
    console.log(tempList);
    history.push("/");

  }

  const handleDelete=(id)=>{
    const tempList = lists.filter((list)=>list.id!==id);
    setList(tempList);
  }

  
  
  return (
    <>
      <Switch>
        <Route path ="/input" render={(props)=> <Input handleSave={handleSave}{...props}/>}/>
        <Route path ="/" render={(props)=> <Home handleDelete ={handleDelete} lists={lists} {...props}/>}/>
      </Switch>
    </>
  );
}

export default App;
