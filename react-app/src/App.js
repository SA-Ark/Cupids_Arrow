import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { authenticate } from './store/session';
import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import UserAnswerForm from './components/Forms/UserAnswerForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UserList';
import User from './components/User/index.js';
import QuestionsPage from './components/Questions';
import MyProfile from './components/Profiles/MyProfile';
import TheirProfile from './components/Profiles/MyProfile';
import MyImages from './components/MyImages'
import UpdateInfo from './components/Forms/UpdateInfoForm';
import DiscoverPage from './components/Discover';

import LikesPage from './components/Likes';
import UserCard from './components/Cards/profile';

// import {}

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(authenticate()).then(setLoaded(true))
      // setLoaded(true);
    })();
  }, [dispatch]);

  // if (!loaded) {
  //   return null;
  // }

  return loaded && (
    <>
      {/* <BrowserRouter> */}
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <Route path='/discover' exact={true}>
          <DiscoverPage />
        </Route> */}
        <Route path='/questions' exact={true}>
          <QuestionsPage />
        </Route>
        <ProtectedRoute path='/likes' exact={true}>
          <LikesPage />
        </ProtectedRoute>
        <Route path='/profile' exact={true}>
          <MyProfile />
        </Route>
        <Route path='/profile/:id' exact={true}>
          <TheirProfile />
        </Route>
        <Route path='/myimages' exact={true}>
          <MyImages />
        </Route>
        <ProtectedRoute path='/discover' exact={true} >
          <DiscoverPage />
        </ProtectedRoute>
        <ProtectedRoute path='/profile' exact={true} >
          <UserCard />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/auth/edit' exact={true}>
          <UpdateInfo />
        </ProtectedRoute> */}
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
        <Route><h1>
          Sorry! Nothing is Here
        </h1>
        </Route>
      </Switch>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App;
