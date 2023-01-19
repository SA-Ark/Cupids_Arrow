import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { useModal } from '../../context/Modal';

const LoginForm = () => {
  const { closeModal } = useModal();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    // const data = await dispatch(login(email, password));
    return dispatch(login(email, password))
      .then(closeModal)
      .catch(async (res) => {
        //CHECK FOR ERROR DICTIONARY SYNTAX FROM BACKEND
        if (res.ok) {
          const data = await res.json()
          if (data.message) setErrors([data.message])
        }
      }
      )
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // if (user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit'>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
