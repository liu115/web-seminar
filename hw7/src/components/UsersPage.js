import React, { Component } from 'react';


class UsersPage extends Component {
  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
  }

  render() {
    return (
      <div>Users
        <li><a href="#/users/1">User 1</a></li>
      </div>
    );
  }
}

export default UsersPage;
