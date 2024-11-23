import React, { useState } from "react";
import nQueen from "./NQueen.js";

function Simulation({setPage}){
    const [count,setCount] = useState("");
    const [chessBoard,setChessBoard] = useState([]);
    const [solutions,setSolutions] = useState(null);
    const [solCount,setSolCount] = useState(0);
    const handleInputChange = (e) => {
        setCount(e.target.value);
    };
    const grid = (solution) => {
        const board = [];
        const n = solution.length;
        for (let row = 0;row < n;row++){
            const cell = [];
            for (let col = 0; col< n; col++){
                const isBlack = ((row + col) % 2) === 0? true : false;
                const isQueen = solution[row][col] === "*";
                cell.push(
                    <div key={`${row}-${col}`} className={`cell ${isBlack ? "black":"white"} ${isQueen ? "queen":""}`} ></div>
                )
            }
            board.push(
                <div key={row} className="row">{cell}</div>
            )
        }
        return board;
    }
    // const normalizeSolution = (solution) => {
    //     return solution.map(row => row.split("")); // Convert each string to an array of characters
    // };
    
    const renderSolution = (solution) => {
        // return solution.map((row,rowIndex) => (
        //     <div key={rowIndex} className="row">
        //         {row.split("").map((col,colIndex) =>(
        //             <div key={`${rowIndex}-${colIndex}`} className={`cell ${col === "*" ? "queen":""}`}></div>
        //         ))}
        //     </div>
        // ));
        return (
            <div className="chessBoard">
                <div className="board" >
                {grid(solution)}
                </div>
            </div>
            
        )
        
        // const normalizedSolution = normalizeSolution(solution);
        // console.log("Normalized Solution:", normalizedSolution); // Debugging
        // return (
        //     <div className="board">
        //         {grid(normalizedSolution)}
        //     </div>
        // );
    };
    
    const nextSol = () => {
        if (solCount < solutions.length - 1) { 
            const newCount = solCount + 1;
            setSolCount(newCount);
            setChessBoard(
                <div>
                    <h1>Solution {newCount+1}:</h1>
                    {renderSolution(solutions[newCount])}
                    {console.log(solutions[newCount])}
                </div>
            );
        }
        else{
            alert("This is the last solution");
        }
    };
    

    const prevSol = () => {
        if (solCount > 0){
            const newCount = solCount - 1;
            setSolCount(newCount)
            setChessBoard(
                <div>
                    <h1>Solution {newCount+1}:</h1>
                    {renderSolution(solutions[newCount])}
                </div>
            )
        }
        else{
            alert("This is the first solution");
        }
        return solCount;
    }

    const handleCreateGrid = () => {
        if (count > 0 && count <= 12) {
            let ans = [];
            const countNum = Number(count)
            const board = Array.from({ length: countNum }, () => Array(countNum).fill("."));
            nQueen(0, board, ans);
            console.log("First Solution:", ans[solCount]);
            setSolutions(ans);
            setSolCount(0);
            
            if (ans.length > 0){
                setChessBoard(
                    <div className="boardClass">
                        <h1>Solution 1:</h1>
                        {renderSolution(ans[0])}
                    </div>
                )
            }else {
                setChessBoard(<h1>No solutions available.</h1>);
            }
        }else {
            alert("Please enter a valid number between 1 and 12.");
        }
        
    };
    return(
        <div className="box">
            {/* <h1>This is where simulation part will come.</h1> */}
            <h1>No of rows of grid</h1>
            <div className="inputButton">
                <input className="input" type="number" placeholder="Upto 12" value={count} onChange={handleInputChange}></input>
            </div>
            <div className="gridButton">
                <button  onClick={handleCreateGrid}>Create Grid</button>
            </div>
            
            {/* <h1>Grid of {count}x{count}</h1> */}
            <div className="polsol">{solutions && (<h2>No of Possible Solutions: {solutions.length}</h2>)}</div>
            
            {chessBoard}
            <div className="arrbutton">
                <button onClick={prevSol}>&lt;</button>
                <button onClick={nextSol}>&gt;</button>
            </div>
            {/* <div style={{backgroundImage:"url('/q.jpg')", height:"100%", width:"300px",objectFit: "contain"}}>

            </div> */}
        </div>
    )
}

export default Simulation;