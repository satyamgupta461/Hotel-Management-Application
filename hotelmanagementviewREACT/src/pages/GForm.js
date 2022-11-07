import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";


class GForm extends Component {
  constructor() {
    super();

    this.state = {
      fullname: "",
      mobilenumber: "",
      idproof: "",
      email: "",
      gender: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setData = this.setData.bind(this);
  }

  setData(value) {
    this.state.data.push(value);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    //https://localhost:44377/api/GuestRole
    // console.log(this.state);
    e.preventDefault();
    fetch('https://localhost:44377/api/GuestRole', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "fullName": this.state.fullname,
        "mobileNumber": this.state.mobilenumber,
        "email": this.state.email,
        "idProof": this.state.idproof,
        "gender": this.state.gender
      })
    })
      .then(Response => Response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <div className="appAside" />
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/sign-in"
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
              to="/sign-in"
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
            <form onSubmit={this.handleSubmit} className="formFields">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="formFieldInput"
                  placeholder="Enter your full name"
                  name="fullname"
                  value={this.state.fullname}
                  onChange={this.handleChange}
                />
              </div>

              <div className="formField">
                <label className="formFieldLabel" htmlFor="name">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="number"
                  className="formFieldInput"
                  placeholder="Enter your number"
                  name="mobilenumber"
                  value={this.state.mobilenumber}
                  onChange={this.handleChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>


              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  Id Proof
                </label>
                <input
                  type="text"
                  id="idproof"
                  className="formFieldInput"
                  placeholder="Enter your Aadhar Number"
                  name="idproof"
                  value={this.state.idproof}
                  onChange={this.handleChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  Gender
                </label>
                <input type="radio" value="male" id="male"
                  onChange={this.handleChange} name="gender" />
                <label for="male">Male</label>

                <input type="radio" value="female" id="female"
                  onChange={this.handleChange} name="gender" />
                <label for="female">Female</label>
              </div>


              <div className="formField">
                <label className="formFieldCheckboxLabel">
                  <input
                    className="formFieldCheckbox"
                    type="checkbox"
                    name="hasAgreed"
                    value={this.state.hasAgreed}
                    onChange={this.handleChange}
                  />{" "}
                  I agree all statements in{" "}
                  <a href="null" className="formFieldTermsLink">
                    terms of service
                  </a>
                </label>
              </div>

              <div className="formField">
                <button className="formFieldButton">Login</button>{" "}
                <Link to="/sign-in" className="formFieldLink">
                  I'm already member
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default GForm;