import React, { Component } from 'react';
import Login from '../auth/login';
import loginImg from "../../images/auth/login.jpg";

export default class Auth extends Component {
  handleSuccessfulAuth = () => {
    this.props.handleSuccessfulLogin();
  }

  handleUnsuccessfulAuth = () => {
    this.props.handleUnsuccessfulLogin();
  }

  render() {
    return (
      <div className="auth-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />
        <div className="right-column">
          <Login
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
          />
        </div>
      </div>
    );
  }
}