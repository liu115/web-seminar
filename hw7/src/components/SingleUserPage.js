import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    name: '',
    avatar: '',
    age: 0,
  };

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    fetch(`/api/users/${this.props.id}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        name: json.name,
        avatar: json.avatar,
        age: json.age,
      });
    }).catch(error => {
      console.log('request failed', error);
    });
  }

  render() {
    return (
      <div>
        User {this.props.id}
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <img src={this.state.avatar} alt="avatar" />
      </div>
    );
  }
}

export default SingleUserPage;
