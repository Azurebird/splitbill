import LoginForm from '../forms/LoginForm';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../actions/login';

/** @deprecated */
class SignUpPage extends Component {
  submit = async data => {
    await this.props.signUp(data);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm signUp={this.signUp} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signUp: PropTypes.func.isRequired
};

export default connect(
  null,
  { signUp }
)(SignUpPage);
