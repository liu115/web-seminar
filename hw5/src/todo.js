import React, { Component } from 'react';
module.exports = class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }
  handleDelete() {
    this.props.del(this.props.index);
  }
  handleComplete() {
    this.props.com(this.props.index);
  }
  render() {
    return (
      <li className={(this.props.completed) ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.completed} onClick={this.handleComplete} />
          <label htmlFor="toggle">{this.props.title}</label>
          <button className="destroy" onClick={this.handleDelete} />
        </div>
      </li>
    );
  }
}
