import React from 'react';
import { connect } from 'react-redux';
import { Container, Button, Icon } from 'semantic-ui-react';

/** @deprecated */
const DashboardPage = () => (
  <Container textAlign="center">
    <Button position="center">
      <Icon name="add circle" /> Adicionar grupo
    </Button>
  </Container>
);

export default connect(
  null,
  {}
)(DashboardPage);
