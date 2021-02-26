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
    </div>
  );
}

export default Login;
