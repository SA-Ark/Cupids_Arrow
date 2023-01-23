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


  return (
    <div className='nav-bar-container' style={{ backgroundColor: 'black', color: 'white' }}>

      
      <div id='homeiconbutton' className='spacing'
        onClick={() => history.push('/')}
      >
        Home
      </div>

      <div id='midbuttonleft' className='spacing'
        onClick={() => history.push('/discover')}
        style={{ display: user?.id ? 'flex' : 'none' }}
      > Discover
      </div>

      <div id='midbuttonmid' className='spacing'

        onClick={() => history.push('/questions')}
        style={{ display: user?.id ? 'flex' : 'none' }}
      >Questions
      </div>



      <div id='midbuttonright' className='spacing'
        onClick={() => history.push('/likes')}
        style={{ display: user?.id ? 'flex' : 'none' }}>
        Likes
      </div>

      <div style={{ display: user?.id ? 'flex' : 'none' }}>
        <LogoutButton style={{ display: user?.id ? 'flex' : 'none' }} className='realButton'
        />
      </div>
      <div id='togglenavsignlog' style={{ display: user?.id ? 'none' : 'flex' }}>
        <div>
          <OpenModalButton
            id='createreviewbutt'
            buttonText="Login!"
            modalComponent={<LoginForm />}
            className='realButton'
          />
        </div>
        <div>
          < OpenModalButton
            id='createreviewbutt'
            buttonText="Sign Up"
            modalComponent={<SignUpForm />}
            className='realButton'
          />
        </div>

        <div id='togglenavprofile' style={{ display: user?.id ? 'flex' : 'none' }
        }>
          <div id='navbarprofile'
            onClick={() => history.push('/profile')}
          >
          </div>
          <p>{user?.first_name}</p>
        </div>
      </div>

    </div >

  );
}

export default NavBar;
