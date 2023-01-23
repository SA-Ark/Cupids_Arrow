import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import { useModal } from '../../context/Modal';


const LoginForm = () => {
  const history = useHistory()
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
      .then(() => closeModal)
      .catch(async (res) => {
        console.log(res)
        if (!res.ok) {
          const response = await res.json()
          // console.log(res)
          if (response.errors) return setErrors([...response])
        }
        // .then((res) => history.push('/discover'))
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
