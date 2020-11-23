
import React from "react";
import './App.css';
import Input from './components/input';
import Display from './components/display';
import { Link,Switch,Route } from 'react-router-dom';

function App() {
  const trial=[{id:1,label:"trial",details:"trial details"}]
  const[lists,setList]= React.useState(trial)
  
  const handleSave=(data)=>{
    const obj={};
    const length = lists.length;
    obj["id"]=lists[length-1].id+1;
    obj["label"] = data.label;
    obj["details"] = data.details;
    const tempList =[...lists];
    tempList.push(obj);
    setList(tempList);

  }
  
  
  return (
    <div className="App">
      <Link to ="/input">
          <button>Add</button>
      </Link>
      
      {/* <Input handleSave ={handleSave}/> */}
      {lists.map((list)=>(
        <Display key={list.id} list={list}/>
      ))};
      <Switch>
        <Route path ="/input" render={(props)=> <Input handleSave={handleSave}{...props}/>}/>
        {/* <Route path ="/" render={(props)=><>} */}
      </Switch>
    </div>
  );
}

export default App;