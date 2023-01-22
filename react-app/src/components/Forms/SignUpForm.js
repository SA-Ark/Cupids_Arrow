import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import { createImage } from '../../store/images';


const SignUpForm = (imgcont) => {
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
  const [image_url, setImage] = useState('');
  const user = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory()

  let relationshipArr = [('Single', 'Single'), ('Seeing someone', 'Seeing someone'), ("It's complicated", "It's complicated"), ('In a relationship', 'In a relationship'), ('Married', 'Married'), ('Divorced', 'Divorced')]
  // console.log("THIS IS A TEST", arr[0], arr[0][0])
  const onSignUp = async (e) => {
    e.preventDefault()
    setErrors([])
    if (password === repeatPassword) {
      imgcont=image_url
      return await dispatch(signUp(
        username,
        first_name,
        last_name,
        email,
        password,
        relationship_status,
        city,
        state,
        image_url
      )).then(history.push('/discover'))
        .catch(async (res) => {
         const response = await res.json()
          if (response.errors) setErrors([...response])
        }
        )
    }
    else setErrors([{ errors: 'Passwords must match!' }])
  }




  const updateUsername = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);
  };

  const updateImage = (e) => {
    console.log(e.target.value)
    setImage(e.target.value);
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

  //hide button dont push them from clicking//
  // if (user?.id) {
  //   return history.push('/');
  // }

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
        <label>Profile Image</label>
        <input
          type='text'
          name='image'
          onChange={updateImage}
          value={image_url}
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
