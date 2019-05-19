import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Icon, Form } from 'semantic-ui-react';
import { Item } from 'semantic-ui-react';
import { getGroupHistory } from '../../actions/groups.action';

class DashboardPage extends Component {
  state = {
    adding: true
  };

  enableAdd = () => {
    this.setState({ adding: true });
  };

  onClick = groupId => async () => {
    await this.props.getGroupHistory(groupId);
    this.props.history.push('/group');
  };

  onGroupCreate = name => async () => {};

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
        {this.state.adding && (
          <Form.Field>
            <div class="ui action input">
              <input type="text" id="groupName" placeholder="" />
              <Button class="ui button">Add</Button>
            </div>
          </Form.Field>
        )}
        <div class="field">
          <Button position="center" onClick={this.enableAdd}>
            <Icon name="add circle" /> Adicionar grupo
          </Button>
        </div>
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
