/* global alert */
import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  state = {
    password: "",
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const key = event.target.name;

    if (key === "password") {
      value = value.substring(0, 4);
    }

    this.setState({
      [key]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.password.length < 4) {
      alert("Enter four digit code.");
    }
    this.setState({
      password: "",
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
