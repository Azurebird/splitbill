import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import Header from './components/header/Header';

const App = () => (
  <div className="ui container">
    <Header />
    <Route path="/" exact component={HomePage} />
    <GuestRoute path="/login" exact component={LoginPage} />
    <GuestRoute path="/signup" exact component={SignUpPage} />
    <UserRoute path="/dashboard" exact component={DashboardPage} />
  </div>
);

export default App;
