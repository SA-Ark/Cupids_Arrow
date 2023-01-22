import { useHistory } from 'react-router-dom'
import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../Forms/LoginForm';
import LogoutButton from '../Buttons/LogoutButton';
import OpenModalButton from '../OpenModalButton'
import './NavBar.css'

const NavBar = () => {
  const history = useHistory()

  return (
    <nav className='nav-bar-container'>
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
            <NavLink to='/sign-up' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to='/users' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to='/discover' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink to='/questions' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Q's
            </NavLink>
          </li>
          <li>
            <NavLink to='/myimages' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              Images
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'white' }}>
              My Profile
            </NavLink>
          </li>
          <li className="button-nav">
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
