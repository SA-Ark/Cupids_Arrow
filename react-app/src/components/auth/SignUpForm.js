import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [relationship_status, setrelationship_status] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state);
  const dispatch = useDispatch();

  let relationshipArr = [('Single', 'Single'), ('Seeing someone', 'Seeing someone'), ("It's complicated", "It's complicated"), ('In a relationship', 'In a relationship'), ('Married', 'Married'), ('Divorced', 'Divorced')]
  // console.log("THIS IS A TEST", arr[0], arr[0][0])
  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(
        username,
        first_name,
        last_name,
        email,
        password,
        relationship_status,
        city,
        state
      ));
      if (data) {
        setErrors(data)
      }
      else {
        return (<Redirect to='/profile' />)
      }
    }
  }

  const updateUsername = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);
  };

  const updatefirst_name = (e) => {
    setfirst_name(e.target.value);
  };

  const updatelast_name = (e) => {
    setlast_name(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updaterelationship_status = (e) => {
    setrelationship_status(e.target.value);
  };

  const updatecity = (e) => {
    setcity(e.target.value);
  };

  const updatestate = (e) => {
    setstate(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user?.id) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='first_name'
          onChange={updatefirst_name}
          value={first_name}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='last_name'
          onChange={updatelast_name}
          value={last_name}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Relationship Status</label>
        <select
          type='text'
          name='relationship_status'
          onChange={updaterelationship_status}
          value={relationship_status}
        >
          {relationshipArr.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
          {/* <option value="Single">Single</option>
          <option value="Seeing someone">Seeing someone</option>
          <option value="It's complicated">It's complicated</option>
          <option value="In a relationship">In a relationship</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option> */}
        </select>
      </div>
      <div>
        <label>City</label>
        <input
          type='text'
          name='city'
          onChange={updatecity}
          value={city}
        ></input>
      </div>
      <div>
        <label>State</label>
        <input
          type='text'
          name='state'
          onChange={updatestate}
          value={state}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};


export default SignUpForm;
