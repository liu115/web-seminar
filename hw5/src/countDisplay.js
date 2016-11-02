import React, { Component } from 'react';
module.exports = class CountDisplay extends Component {
  render() {
    return (
      <span className="todo-count">{this.props.completed.filter(x => !x).length} items left</span>
    );
  }
}
