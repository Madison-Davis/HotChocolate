import { App } from "./ui/app";
import * as ReactDOM from "react-dom";
import * as React from "react";

// Before you can do anything, you must open the terminal and run 
//    .\install-everything.bat

//React.createElement(App, {},{})
//is the same thing as 
//<App />

ReactDOM.render(<App />, document.getElementById("siteContainer"));