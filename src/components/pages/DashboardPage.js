import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Icon, Form } from 'semantic-ui-react';
import { Item } from 'semantic-ui-react';
import { getGroupHistory, create } from '../../actions/groups.action';

class DashboardPage extends Component {
  state = {
    data: {
      groupName: ''
    },
    adding: false
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  enableAdd = () => {
    this.setState({ adding: true });
  };

  onClick = groupId => async () => {
    await this.props.getGroupHistory(groupId);
    this.props.history.push('/group');
  };

  onGroupCreate = async () => {
    const name = this.state.data.groupName;
    await this.props.create(name);
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
        {this.state.adding && (
          <Form onSubmit={this.onGroupCreate}>
            <Form.Field>
              <div className="ui action input">
                <input
                  type="text"
                  id="groupName"
                  name="groupName"
                  placeholder="Group Name"
                  onChange={this.onChange}
                />
                <Button className="ui button">Add</Button>
              </div>
            </Form.Field>
          </Form>
        )}
        <div className="field">
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
  { getGroupHistory, create }
)(DashboardPage);
