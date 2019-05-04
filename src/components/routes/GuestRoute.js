import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.token
  };
};

GuestRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(GuestRoute);
