import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { logout } from '../../store/session';

export default function LogoutButton(place){
  const dispatch = useDispatch()
  const history = useHistory()
  const [errors, setErrors] = useState([])
  // setErrors([])

  const onLogout = async (e) => {
    setErrors([])
    await dispatch(logout())
      .then(() => history.push('/'))
      .catch(async (res) => {
        res.errors || errors.length ? setErrors(res.errors) : history.push('/')
      });
  };

  return <button type='button' onClick={onLogout}>Logout</button>;
};

