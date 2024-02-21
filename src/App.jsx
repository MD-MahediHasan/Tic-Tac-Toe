import React from "react";
import  "./App.css";
import Game from "./components/game";

const App=()=>{
    return(
        <div className="app">
            <h1>Tic Tac Toe</h1>
            <h3>This is Heading</h3>
            <Game/>
        </div>
    )
}

export default App;