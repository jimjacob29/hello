import React from "react";
import { Link } from "react-router-dom";
import Display from "./display";

export default function Home(props){
    return(
        <div className="App">
                <Link to ="/input">
                    <button className="buttonAdd">Add</button>
                </Link>
            {props.lists.map((list)=>(
                 <Display handleDelete={props.handleDelete}key={list.id} list={list}/>
            ))}

        </div>
    );
}