import React, { Component, PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
      <div className="container-fluid">

        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <img src={this.state.avatar} alt="avatar" className="img-thumbnail" />
          </div>
          <div className="col-sm-8 col-xs-12">
            Name: {this.state.name}
            <br />
            Age: {this.state.age}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleUserPage;
