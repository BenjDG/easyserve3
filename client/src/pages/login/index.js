import React, { useState } from 'react';
import API from '../../services/API';
import { UseUserProvider } from '../../services/userContext';
import './style.css';

function Login () {
  const [_, setUser] = UseUserProvider();
  // Setting the component's initial login
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const [err, setErr] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogin(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.login(login.email, login.password)
      .then(result => {
        if (result.status === 200) {
          // redirect to main menu
          console.log(result);
          console.log(result.data.email);
          console.log(result.data.id);
          setUser({
            id: result.data.id,
            first_name: result.data.first_name,
            last_name: result.data.last_name,
            email: result.data.email
          });
          // window.location = '/mainmenu';
        } else {
          setErr('An error occured.  Please check your username and password.');
          console.error(result.status);
        }
      }).catch(err => {
        setErr('An error occured.  Please check your username and password.');
        console.error(err);
      });
    setLogin({
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <form className='form'>
        <input
          value={login.email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email'
        />
        <input
          value={login.password}
          name='password'
          onChange={handleInputChange}
          type='password'
          placeholder='Password'
        />
        <button onClick={handleFormSubmit}>Submit</button>
        <h2 className='error'>{err}</h2>
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
