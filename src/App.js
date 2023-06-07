import "./components/style/main.scss";
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
import Contact from "./components/pages/contact";
import Blog from "./components/pages/blog";
import PortfolioDetail from "./components/portfolio/portfolio-detail"
import NoMatch from "./components/pages/no-match";



export default class App extends Component {

  

render() {
  
  return (
    <div className="App">

      <Router>

      <h1>Javier Valdez Portfolio </h1>
     <div>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
     </div>

        <div>
          <NavigationContainer />

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about-me" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route exact path="/portfolio/:slug" element={<PortfolioDetail/>} />
            <Route path="/:slug" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>

    
     
    </div>
  );
}
}