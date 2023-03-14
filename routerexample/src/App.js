import React from "react";
import logo from './logo.svg';
import './App.css';
import Student from "./Student";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Car from "./pages/Carinfo";
import UserInfo from "./pages/UserInfo";


function App() {
    return (
        <div>
            <h1>
                Welcome to the Service of Car Sales
            </h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/carInfo" element={<Car/>}/>
                        <Route path="/userInfo" element={<UserInfo/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>





        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
