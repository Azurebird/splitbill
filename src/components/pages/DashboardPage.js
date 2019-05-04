import React from 'react';
import { logout } from '../../actions/login';
import { connect } from 'react-redux';

/** @deprecated */
const DashboardPage = ({ logout }) => (
  <div>
    This is the dashboard
    <button onClick={() => logout()}>Logout</button>
  </div>
);

export default connect(
  null,
  { logout }
)(DashboardPage);
