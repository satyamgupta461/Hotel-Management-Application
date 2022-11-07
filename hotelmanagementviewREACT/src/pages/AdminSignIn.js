import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { HashRouter as Router, Route, NavLink} from "react-router-dom";
import '../App.css';

class AdminSignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    }; 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirection = this.handleRedirection.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  } 

  handleRedirection( token ){
    //console.log(token)
    window.location = `/#/search/${token}`;    
  }

  async handleSubmit(event) {
    event.preventDefault();
    var token = ""
    await fetch(`https://localhost:44377/api/AdminDashboard?username=${encodeURIComponent(this.state.email)}&password=${encodeURIComponent(this.state.password)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((data) => token = data);
     //console.log(token)
     this.handleRedirection(token);
  }

  render() {
    return (
      <div className="App">
        <div className="appAside" />
        <div className="appForm">
          <div className="pageSwitcher">
          <NavLink
              to="/admin-sign-in"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Admin Sign In
            </NavLink>
            <NavLink
              to="/sign-in"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/signup"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Sign Up
            </NavLink>

            <NavLink
              exact
              to="/GForm"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Guest Form
            </NavLink>
          </div>

          <div className="formTitle">
          <NavLink
              to="/admin-sign-in"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Admin Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              to="/sign-in"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to="/signup"
              activeClassName="formTitleLink-active"
              className="formTitleLink"
            >
              Sign Up
            </NavLink>{" "}
            or{" "}<NavLink
              exact
              to="/GForm"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem"
            >
              Guest Form
            </NavLink>
          </div>
          <div className="formCenter">
            <form className="formFields" onSubmit={this.handleSubmit}>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  UserName
                </label>
                <input
                  type="UserName"
                  id="username"
                  className="formFieldInput"
                  placeholder="Enter your username"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="formField">
                <button className="formFieldButton">Sign In</button>{" "}
                <Link to="/" className="formFieldLink">
                  Create an account
                </Link>
              </div>

              <div className="formField">
                <Link to="/GForm" className="formFieldLink">
                  Continue As Guest
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminSignIn;