import React, { Component } from "react";
import './App.css';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import axios from 'axios';


import PortfolioContainer from "./components/portfolio/portfolio-container";
import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home";
import About from "./components/pages/about";


export default class App extends Component {
render() {
  return (
    <div className="App">

      <Router>
        <div>
          <NavigationContainer />

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about-me" element={<About/>}/>
          </Routes>
        </div>
      </Router>

     <h1>Javier Valdez Portfolio </h1>
     <div>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
     </div>
     <PortfolioContainer/>
    </div>
  );
}
}