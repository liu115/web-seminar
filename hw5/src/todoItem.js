import React, { Component } from 'react';
import Todo from './todo.js';
module.exports = class TodoItem extends Component {
  render() {
    const list = this.props.list.map((s, index) => <Todo title={s} completed={this.props.completed[index]} del={this.props.del} com={this.props.com} index={index} key={index} />);
    return (
      <ul className="todo-list">
        {list}
      </ul>
    );
  }
}
