import React, { Component } from 'react';

import HomePage from './HomePage';
import UsersPage from './UsersPage';
import SingleUserPage from './SingleUserPage';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  state = {
    route: window.location.hash.substr(1),
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  renderRoute() {
    if (this.state.route === '/users') {
      return <UsersPage />;
    }

    if (this.state.route.startsWith('/users/')) {
      const id = this.state.route.split('/users/')[1];
      return <SingleUserPage id={id} />;
    }

    return <HomePage />;
  }

  render() {
    return (
      <div className="container">
        <h1 className="">App</h1>
        <ul className="nav nav-tabs">
          <li><a href="#/">Home</a></li>
          <li><a href="#/users">Users</a></li>
        </ul>
        {this.renderRoute()}
      </div>
    );
  }
}


export default App;
