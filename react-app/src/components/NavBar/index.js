
import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import LogoutButton from '../auth/LogoutButton';
import OpenModalButton from '../OpenModalButton'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav-bar-container'>
      <div>
        <ul>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
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
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to='/questions' exact={true} activeClassName='active'>
              Q's
            </NavLink>
          </li>
          <li>
            <NavLink to='/myimages' exact={true} activeClassName='active'>
              Images
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile' exact={true} activeClassName='active'>
              My Profile
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
