import React from "react";

export default function Display(props){
    return(
        <>
        <div className ="task">
            <h1>{props.list.label}</h1>
            <span>{props.list.details}</span>
            <div>
                <button className="buttonDelete" onClick={()=>{props.handleDelete(props.list.id)}}>delete</button>
            </div>
        </div>
            
        </>
    )
}