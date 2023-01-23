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
  const [hide, setHide] = useState(0)
  // const [session, setSession] = useState('none')
  // const [nosesh, setNosesh] = useState('flex')

  // const hider = (hide) => setHide(hide + 1)

  let profilepic
  let navright2
  let navright
  if (user?.id) {
    navright = 'none'
    navright2 = 'flex'
  }
  else {
    navright2 = 'none'
    navright = 'flex'
  }
  useEffect(() => {
    
  }, [user])


  return (
    <nav className='nav-bar-container' style={{backgroundColor: 'pink'}}>

      <div id='navbarleft'>
        <div id='homeiconbutton'
          onClick={() => history.push('/')}
        >
          Home
        </div>
      </div>

      <div id='navbarmid'>
        <div id='midbuttonleft'>

        </div>
        {navright}
        <div id='midbuttonmid'>
        </div>
        {navright2}
        <div id='midbuttonright'>
        </div>
      </div>









      <div id='navbarright'>
        <div id='togglenavsignlog' style={{ display:  navright2  }}>
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

        <div id='togglenavprofile' style={{ display: navright }}>
          <div id='navbarprofile'
            onClick={() => history.push('/profile')}
            style={{ backgroundImage: `url("${profilepic}")` }}
          >
          </div>
          <p>{user?.first_name}</p>
        </div>
      </div>















      <div className='nav-bar-two'>
        <ul>
          <li>
            <NavLink to='/' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </NavLink>
          </li>
          <li className="button-nav">
            {/* <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink> */}
            < OpenModalButton
              id='createreviewbutt'
              buttonText="Login!"
              modalComponent={<LoginForm />}
            />
          </li>
          <li>
            < OpenModalButton
              id='createreviewbutt'
              buttonText="Sign Up"
              modalComponent={<SignUpForm />}
            />
          </li>
          {/* <li>
            <NavLink to='/users' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Users
            </NavLink>
          </li> */}
          <li>
            <NavLink to='/discover' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Discover
            </NavLink>
          </li>
          {/* <li>
            <NavLink to='/questions' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Q's
            </NavLink>
          </li> */}
          <li>
            <NavLink to='/likes' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Likes
            </NavLink>
          </li>
          {/* <li>
            <NavLink to='/myimages' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Images
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to='/profile' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              My Profile
            </NavLink>
          </li> */}
          <li className="button-nav">
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
