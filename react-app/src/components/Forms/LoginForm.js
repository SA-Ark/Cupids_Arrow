import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import { useModal } from '../../context/Modal';


const LoginForm = () => {
  const history = useHistory
  const { closeModal } = useModal();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const user = useSelector(state => state.session.user); //HIDE BUTTON ON PAGE
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([])

    return await dispatch(login(email, password))
      .then(closeModal)
      .then(history.push('/discover'))
      .catch(async (res) => {
        const response = await res.json()
        if (response.errors) setErrors([...response])
        //CHECK FOR ERROR DICTIONARY SYNTAX FROM BACKEND
        // if (res.ok) {
        //   const data = await res.json()
        //   if (data.errors) setErrors([data.message])
        // }
        // if (res.errors) setErrors([...res.errors])
      })
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

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
