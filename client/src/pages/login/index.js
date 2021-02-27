import React, { useState } from 'react';
import './style.css';

function Login () {
  // Setting the component's initial state
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setState({
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <form className='form'>
        <input
          value={state.email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email'
        />
        <input
          value={state.password}
          name='password'
          onChange={handleInputChange}
          type='password'
          placeholder='Password'
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
      <h2>Demo Users:</h2>
      <h3>Jane</h3>
      <p>Email: 1@1.com</p>
      <p>Password: 1234</p>
      <h3>Billy</h3>
      <p>Email: 1@2.com</p>
      <p>Password: 1234</p>
      <h3>Lloyd</h3>
      <p>Email: 1@3.com</p>
      <p>Password: 1234</p>
    </div>
  );
}

export default Login;
