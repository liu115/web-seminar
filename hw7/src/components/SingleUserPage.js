import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
  }

  render() {
    return <div>User {this.props.id}</div>;
  }
}

export default SingleUserPage;
