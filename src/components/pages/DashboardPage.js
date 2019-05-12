import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Icon } from 'semantic-ui-react';
import { Item } from 'semantic-ui-react';
import { getGroupHistory } from '../../actions/groups.action';

class DashboardPage extends Component {
  onClick = groupId => async () => {
    await this.props.getGroupHistory(groupId);
    this.props.history.push('/group');
  };

  render() {
    return (
      <Container textAlign="center">
        <Item.Group link>
          {this.props.groups.map((group, i) => (
            <Item key={i} onClick={this.onClick(group.groupId)}>
              <Item.Image
                size="tiny"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
              <Item.Content verticalAlign="middle">
                <Item.Header as="a">{group.name}</Item.Header>
              </Item.Content>
            </Item>
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
    groups: state.groups.list
  };
};

export default connect(
  mapState,
  { getGroupHistory }
)(DashboardPage);
