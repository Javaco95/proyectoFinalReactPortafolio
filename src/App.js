// import "./components/style/main.scss";
// import React, { Component } from "react";
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from 'react-router-dom';
// import axios from 'axios';
// import NavigationContainer from "./components/navigation/navigation-container";
// import Home from "./components/pages/home";
// import About from "./components/pages/about";
// import Contact from "./components/pages/contact";
// import Blog from "./components/pages/blog";
// import PortfolioManager from "./components/pages/portfolio-manager"
// import PortfolioDetail from "./components/portfolio/portfolio-detail"
// import Auth from "./components/pages/auth";
// import NoMatch from "./components/pages/no-match";
// import React, { useEffect, useState } from 'react';



// export default class App extends Component {
//   const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//     useEffect(() => {
//       const authToken = localStorage.getItem('authToken');
//       setIsLoggedIn(!!authToken);
  
  
//   constructor(props) {
//     super(props);

    

//     this.state = {
//       loggedInStatus: "NOT_LOGGED_IN"
//     };

//     this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
//     this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
//     this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
//   }


  
// handleSuccessfulLogin(){
//   this.setState({
//     loggedInStatus: "LOGGED_IN"
//   })
// }

// handleUnsuccessfulLogin() {
//   this.setState({
//     loggedInStatus: "NOT_LOGGED_IN"
//   })
// }

// handleSuccessfulLogout(){
//   this.setState({
//     loggedInStatus: "NOT_LOGGED_IN"
//   })
// }

// checkLoginStatus() {
//   return axios
//     .get("https://api.devcamp.space/logged_in", { withCredentials: true })
//     .then((response) => {
//       const loggedIn = response.data.logged_in;
//       const loggedInStatus = this.state.loggedInStatus;
//       if (loggedIn && loggedInStatus === "LOGGED_IN") {
//         return loggedIn;
//       } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
//         this.setState({ loggedInStatus: "LOGGED_IN" });
//       } else if (!loggedIn && loggedInStatus === "LOGGIN_IN") {
//         this.setState({
//           loggedInStatus: "NOT_LOGGED_IN",
//         });
//       }
//     })
//     .catch((error) => {
//       console.log("Error", error);
//     });
// }
// componentDidMount() {
//   this.checkLoginStatus();
// }

// authorizedPages() {
//   return [
//     <Route key="portfolio-manage" path="/portfolio-manager" element={<PortfolioManager/>}/>
//   ]
// }

// render() {
  
//   return (
//     <div className="container">

//       <Router>
//         <div>
//           <NavigationContainer
//            loggedInStatus={this.state.loggedInStatus} 
//            handleSuccessfulLogout={this.handleSuccessfulLogout}
//            />

//           <h2>{this.state.loggedInStatus}</h2>

//           <Routes>
//             <Route exact path="/" element={<Home/>}/>
       
//             <Route
//             path="/auth"
//             element={
//               <Auth
//                 {...this.props}
//                 handleSuccessfulLogin={this.handleSuccessfulLogin}
//                 handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
//                 history={this.props.history}
//               />
//             }
// />

//             <Route path="/about-me" element={<About/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//             <Route path="/blog" element={<Blog/>}/>
//             { this.state.loggedInStatus === "LOGGED_IN" ?   this.authorizedPages() : null}
//             <Route exact path="/portfolio/:slug" element={<PortfolioDetail/>} />
//             <Route path="/:slug" element={<NoMatch />} />
//           </Routes>
//         </div>
//       </Router>

    
     
//     </div>
//   );
// }
// }

// import "./components/style/main.scss";
// import React, { Component, useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faSignOutAlt, faEdit, faBan } from "@fortawesome/free-solid-svg-icons";

// import NavigationContainer from "./components/navigation/navigation-container";
// import Home from "./components/pages/home";
// import About from "./components/pages/about";
// import Contact from "./components/pages/contact";
// import Blog from "./components/pages/blog";
// import BlogDetail from "./components/pages/blog-detail";
// import PortfolioManager from "./components/pages/portfolio-manager";
// import PortfolioDetail from "./components/portfolio/portfolio-detail";
// import Auth from "./components/pages/auth";
// import NoMatch from "./components/pages/no-match";

// library.add(faTrash, faSignOutAlt, faEdit, faBan);

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedInStatus: "NOT_LOGGED_IN"
//     };

//     this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
//     this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
//     this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
//   }

//   componentDidMount() {
//     // Check if an authentication token exists in local storage
//     const authToken = localStorage.getItem('authToken');
//     if (authToken) {
//       this.setState({ loggedInStatus: "LOGGED_IN" });
//     }
  
//     //Check the login status
//     this.checkLoginStatus();
//   }

//   handleSuccessfulLogin(authToken) {
//     // Store the authentication token in local storage
//     localStorage.setItem('authToken', authToken);
  
//     this.setState({
//       loggedInStatus: "LOGGED_IN"
//     });
//   }

//   handleUnsuccessfulLogin() {
//     this.setState({
//       loggedInStatus: "NOT_LOGGED_IN"
//     });
//   }

//   handleSuccessfulLogout() {
//     // Remove the authentication token from local storage
//     localStorage.removeItem('authToken');

//     this.setState({
//       loggedInStatus: "NOT_LOGGED_IN"
//     });
//   }

//   checkLoginStatus() {
//     return axios
//       .get("https://api.devcamp.space/logged_in", { withCredentials: true })
//       .then((response) => {
//         const loggedIn = response.data.logged_in;
//         if (loggedIn) {
//           this.setState({ loggedInStatus: "LOGGED_IN" });
//         } else {
//           this.setState({ loggedInStatus: "NOT_LOGGED_IN" }, () => {
//             localStorage.removeItem('authToken');
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("Error", error);
//       });
//   }
  

//   authorizedPages() {
//     return [
//       <Route key="portfolio-manage" path="/portfolio-manager" element={<PortfolioManager />} />
//     ];
//   }

//   render() {
//     return (
//       <div className="container">
//         <Router>
//           <div>
//             <NavigationContainer
//               loggedInStatus={this.state.loggedInStatus}
//               handleSuccessfulLogout={this.handleSuccessfulLogout}
//             />
  
//             <h2>{this.state.loggedInStatus}</h2>
  
//             <Routes>
//               <Route exact path="/" element={<Home />} />
//               <Route
//                 path="/auth"
//                 element={
//                   <Auth
//                     {...this.props}
//                     handleSuccessfulLogin={this.handleSuccessfulLogin}
//                     handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
//                     history={this.props.history}
//                   />
//                 }
//               />
//               <Route path="/about-me" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/blog" element={<Blog />} />
//               <Route path="/b/:slug" element={<BlogDetail />} />
//               {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
//               <Route exact path="/portfolio/:slug" element={<PortfolioDetail/>} />
//               <Route path="/:slug" element={<NoMatch />} />
//             </Routes>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }  

import "./components/style/main.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSignOutAlt, faEdit, faBan } from "@fortawesome/free-solid-svg-icons";

import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Blog from "./components/pages/blog";
import BlogDetail from "./components/pages/blog-detail";
import PortfolioManager from "./components/pages/portfolio-manager";
import PortfolioDetail from "./components/portfolio/portfolio-detail";
import Auth from "./components/pages/auth";
import NoMatch from "./components/pages/no-match";

library.add(faTrash, faSignOutAlt, faEdit, faBan);

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setLoggedInStatus("LOGGED_IN");
    }
    checkLoginStatus();
  }, []);

  const handleSuccessfulLogin = (authToken) => {
    localStorage.setItem('authToken', authToken);
    setLoggedInStatus("LOGGED_IN");
  };

  const handleUnsuccessfulLogin = () => {
    setLoggedInStatus("NOT_LOGGED_IN");
  };

  const handleSuccessfulLogout = () => {
    localStorage.removeItem('authToken');
    setLoggedInStatus("NOT_LOGGED_IN");
  };

  const checkLoginStatus = () => {
    return axios
      .get("https://api.devcamp.space/logged_in", { withCredentials: true })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        if (loggedIn) {
          setLoggedInStatus("LOGGED_IN");
        } else {
          setLoggedInStatus("NOT_LOGGED_IN");
          localStorage.removeItem('authToken');
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const authorizedPages = () => {
    return [
      <Route key="portfolio-manage" path="/portfolio-manager" element={<PortfolioManager />} />
    ];
  };

  return (
    <div className="container">
      <Router>
        <div>
          <NavigationContainer
            loggedInStatus={loggedInStatus}
            handleSuccessfulLogout={handleSuccessfulLogout}
          />

          <h2>{loggedInStatus}</h2>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/auth"
              element={
                <Auth
                  handleSuccessfulLogin={handleSuccessfulLogin}
                  handleUnsuccessfulLogin={handleUnsuccessfulLogin}
                />
              }
            />
            <Route path="/about-me" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/b/:slug" element={<BlogDetail />} /> //elimine slug
            {loggedInStatus === "LOGGED_IN" ? authorizedPages() : null}
            <Route exact path="/portfolio/:slug" element={<PortfolioDetail />} /> 
            <Route path="/:slug" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
