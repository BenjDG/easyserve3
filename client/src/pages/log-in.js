/* global alert */
import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  // Setting the component's initial state
  state = {
    password: ''
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const key = event.target.name;

    if (key === 'password') {
      value = value.substring(0, 4);
    }
    // Updating the input's state
    this.setState({
      [key]: value
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.password.length < 4) {
      alert('Enter four digit code.');
    }
    this.setState({
      password: ''
    });
  };

  render () {
    return (
      <div>
        <form className='form'>
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

export default Form;
