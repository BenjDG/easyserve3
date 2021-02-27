import React, { useState } from 'react';
import axios from 'axios';
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
    loginUser(state.email, state.password);
  };

  function loginUser (email, password) {
    axios.post('api/login', {
      email: email,
      password: password
    })


    // $.post('/api/login', {
    //   email: email,
    //   password: password
    // })
    //   .then(() => {
    //     emailInput.val('');
    //     passwordInput.val('');
    //     window.location.replace('/notes');
    //     // If there's an error, log the error
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     if (err.status === 401) {
    //       errorMessage('Invalid username or password.');
    //     } else {
    //       errorMessage('Error, please refresh and try again.');
    //     }
    //   });
  }

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
