/* global alert */
import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import './style.css';

class Login extends Component {
  // Setting the component's initial state
  state = {
    email: '',
    password: ''
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState(prevValue => ({ ...prevValue, [name]: value }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  render () {
    return (
      <div>
        <form className='form'>
          <input
            value={this.state.email}
            name='email'
            onChange={this.handleInputChange}
            type='email'
            placeholder='Email'
          />
          <input
            value={this.state.password}
            name='password'
            onChange={this.handleInputChange}
            type='password'
            placeholder='Password'
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
