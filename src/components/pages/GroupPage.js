import React from 'react';
import { connect } from 'react-redux';

const GroupPage = ({ history, groupHistory }) => ({
  render() {
    if (!groupHistory) {
      history.push('/dashboard');
    }
    return <div>{groupHistory}</div>;
  }
});

const mapState = state => ({
  groupHistory: state.groups.history
});

export default connect(
  mapState,
  {}
)(GroupPage);
