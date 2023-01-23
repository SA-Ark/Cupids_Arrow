import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom'
import React from 'react';
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';
import LogoutButton from '../Buttons/LogoutButton';
import OpenModalButton from '../OpenModalButton'
import './NavBar.css'

const NavBar = () => {
  const history = useHistory()
  const user = useSelector(state => state.user)
  const img = useSelector(state => state.images)
  const [hide, setHide] = useState(false)
  // const [session, setSession] = useState('none')
  // const [nosesh, setNosesh] = useState('flex')

  // const hider = (hide) => setHide(hide + 1)

  // let profilepic
  // let navright2
  // let navright
  // if (user?.id) {
  //   navright = 'none'
  //   navright2 = 'flex'
  // }
  // else {
  //   navright2 = 'none'
  //   navright = 'flex'
  // }
  // useEffect(() => {

  // }, [user])


  return (
    <div className='nav-bar-container' style={{ backgroundColor: 'black', color: 'white' }}>

      <div id='navbarleft'>
        <div id='homeiconbutton'
          onClick={() => history.push('/profile')}
        >
          Home
        </div>
      </div>

      <div id='navbarmid'>
        <div id='midbuttonleft'>
          <button
            onClick={() => history.push('/discover')}
            style={{ display: user?.id ? 'flex' : 'none' }}
          > Discover</button>
        </div>


        <div id='midbuttonmid'>
          <button
            onClick={() => history.push('/questions')}
            style={{ display: user?.id ? 'flex' : 'none' }}
          >Questions</button>
        </div>


        <div id='midbuttonright'>
          <button
            onClick={() => history.push('/likes')}
            style={{ display: user?.id ? 'flex' : 'none' }}
          > Likes</button>
        </div>
        <div style={{ display: user?.id ? 'flex' : 'none' }}
        >
          <LogoutButton style={{ display: user?.id ? 'flex' : 'none' }}
          />
        </div>
      </div>









      <div id='navbarright'>
        <div id='togglenavsignlog' style={{ display: user?.id ? 'none' : 'flex' }}>
          <div>
            < OpenModalButton
              id='createreviewbutt'
              buttonText="Login!"
              modalComponent={<LoginForm />}
            />
          </div>
          <div>
            < OpenModalButton
              id='createreviewbutt'
              buttonText="Sign Up"
              modalComponent={<SignUpForm />}
            />
          </div>
        </div>
        <div id='togglenavprofile' style={{ display: user?.id ? 'flex' : 'none' }
        }>
          <div id='navbarprofile'
            onClick={() => history.push('/profile')}
          // style={{ backgroundImage: `url("${profilepic}")` }}
          >
            hey
          </div>
          <p>{user?.first_name}</p>
        </div>
      </div>

    </div>













  );
}

export default NavBar;
