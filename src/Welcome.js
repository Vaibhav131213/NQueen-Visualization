import React from "react";

export default function Welcome({setPage}){
    return(
    <div className='WelcomePage'>
    <h1>Welcome to the N Queen Visualization program.</h1>
    <div><button onClick={()=> setPage("Simulation")}>Click here to Start Simulation</button></div>
    </div>
    )
}