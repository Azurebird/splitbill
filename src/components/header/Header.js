import React from 'react';
import { logout } from '../../actions/login';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, logout }) => (
  <Menu name="DashBoard">
    <Menu.Menu position="right">
      {isAuthenticated ? (
        <Menu.Item name="logout" onClick={logout} />
      ) : (
        <React.Fragment>
          <Menu.Item name="login">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item name="login">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        </React.Fragment>
      )}
    </Menu.Menu>
  </Menu>
);

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.token
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);
