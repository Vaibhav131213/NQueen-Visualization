import logo from './logo.svg';
import {useState} from "react";
import Welcome from './Welcome.js';
import Simulation from './Simulation.js';
// import './App.css';

// function Welcome(){
//   const[page,setPage] = useState();
//   return(
  // <div className='WelcomePage'>
  // <h1>Welcome to the N Queen Simulation program.</h1>
  // <div><button onClick={()=> setPage()}>Click here to Start Simulation</button></div>
  // </div>
//   )
// }

// function Mybutton(){
//   return (
//   <button className="WelcomePage" >
//     Click here to Start Simulation
//   </button>
//   );
// }
function App() {
  const [page,setPage] = useState("Welcome");
  return (
  <div>
    {page === "Welcome" && <Welcome setPage={setPage}/>}
    {page === "Simulation" && <Simulation/>}
  </div>
  );
}

export default App;
