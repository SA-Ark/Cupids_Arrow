import React, { useState, useEffect } from 'react';
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
      .then(async (res) => {
        if (!res.ok) {
          if (res.errors) setErrors([res.errors]);
        } else {
          closeModal() || history.push(`/`)
        }
      })
      .catch(async (res) => {
        if (res.errors) {
          return setErrors([res.errors])
        }
      })
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => { }, [errors])
  return (
    <form onSubmit={onLogin} style={{ height: '30vw' }}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind} style={{ fontSize: '10vw', paddingTop: '10vw' }}>{error}</div>
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
