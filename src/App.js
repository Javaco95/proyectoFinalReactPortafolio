import "./components/style/main.scss";
import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Blog from "./components/pages/blog";
import PortfolioDetail from "./components/portfolio/portfolio-detail"
import Auth from "./components/pages/auth";
import NoMatch from "./components/pages/no-match";



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
  }
  
handleSuccessfulLogin(){
  this.setState({
    loggedInStatus: "LOGGED_IN"
  })
}


handleUnSuccessfulLogin(){
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  })
}


render() {
  
  return (
    <div className="container">

      <Router>
        <div>
          <NavigationContainer />

          <Routes>
            <Route exact path="/" element={<Home/>}/>

            <Route 
              path="/auth"
              element={
                <Auth
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              }
                />          

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