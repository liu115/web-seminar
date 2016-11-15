import React, { Component } from 'react';


class UsersPage extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
    .then(response => response.json())
    .then(json => {
      this.setState({ users: json.users });
    }).catch(error => {
      console.log('request failed', error);
    });
  }

  render() {
    return (
      <div>Users
        <ul>
          {this.state.users.map((val, i) =>
            <li key={i}><a href={`#/users/${i}`}>User {i}</a></li>
          )}
        </ul>
      </div>
    );
  }
}

export default UsersPage;
