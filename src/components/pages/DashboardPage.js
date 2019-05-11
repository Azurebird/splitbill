import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Icon } from 'semantic-ui-react';
import { Item } from 'semantic-ui-react';

class DashboardPage extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Item.Group link>
          {this.props.categories.map((c, i) => (
            <Item key={i}>{c.name}</Item>
          ))}
        </Item.Group>
        <Button position="center">
          <Icon name="add circle" /> Adicionar grupo
        </Button>
      </Container>
    );
  }
}

const mapState = state => {
  return {
    categories: state.categories
  };
};

export default connect(
  mapState,
  {}
)(DashboardPage);
