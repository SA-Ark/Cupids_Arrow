import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import UserAnswerForm from './components/Forms/UserAnswerForm';
import NavBar from './components/NavBar/index.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UserList';
import User from './components/User/index.js';
import { authenticate } from './store/session';
import QuestionsPage from './components/Questions';
import MyProfile from './components/MyProfile';
import MyImages from './components/MyImages'
import UpdateInfo from './components/Forms/UpdateInfoForm';
// import {}

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await
        dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/prapmauro' exact={true}>
          <UpdateInfo />
        </Route>
        <Route path='/devtest' exact={true}>
          <UserAnswerForm />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/questions' exact={true}>
          <QuestionsPage />
        </Route>
        <Route path='/profile' exact={true}>
          <MyProfile />
        </Route>
        <Route path='/myimages' exact={true}>
          <MyImages />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
