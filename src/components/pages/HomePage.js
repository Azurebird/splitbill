import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/login.action';

const HomePage = () => (
  <div>
    <h1>Split Bills</h1>
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout }
)(HomePage);
