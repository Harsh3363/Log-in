import React from "react";
import Login from "./Login";

let logged=true;
function rendering(){return(
  // logged?<h1>Hello</h1>:<Login />
  (logged)&&<Login />
)
}

function App() {
  return (
    <div className="container">
    {rendering()}
    </div>
  );
}

export default App;
