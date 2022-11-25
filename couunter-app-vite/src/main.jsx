import  React  from "react";
import  ReactDom  from "react-dom/client";
import { CounterApp } from "./CounterApp";
//import { FirsrtApp } from "./FirsrtApp";
//import { HelloWorldApp } from "./HelloWorldApp";

import './style.css';

ReactDom.createRoot(document.getElementById("fede")).render(
    <React.StrictMode>
        <CounterApp value= { 0 } />
    </React.StrictMode>
);