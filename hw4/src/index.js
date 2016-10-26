/* eslint no-console: 0, no-plusplus: 0, react/prop-types: 0, max-len: 0, react/jsx-filename-extension: 0,
react/react-in-jsx-scope: 0, no-undef: 0, react/no-multi-comp: 0, react/prefer-stateless-function: 0 */
const { Component } = React;

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['test', 'try'],
      completed: [false, true],
      input: '',
    };

    this.clearCompleted = this.clearCompleted.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.deleteTodoByIndex = this.deleteTodoByIndex.bind(this);
    this.completeTodoByIndex = this.completeTodoByIndex.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }
  clearCompleted() {
    for (let i = 0; i < this.state.completed.length; i++) {
      this.state.completed[i] = false;
    }
    this.setState({ completed: this.state.completed });
  }
  toggleAll() {
    let allTrue = true;
    for (let i = 0; i < this.state.completed.length; i++) {
      if (this.state.completed[i] === false) allTrue = false;
    }

    if (allTrue) {
      for (let i = 0; i < this.state.completed.length; i++) {
        this.state.completed[i] = false;
      }
    } else {
      for (let i = 0; i < this.state.completed.length; i++) {
        this.state.completed[i] = true;
      }
    }
    this.setState({ completed: this.state.completed });
  }
  handleInputChange(e) {
    this.setState({ input: e.target.value });
  }
  handleKeyPress(e) {
    if (e.keyCode === 13 || e.which === 13) {
      this.addNewTodo();
    }
  }
  deleteTodoByIndex(i) {
    this.state.list.splice(i, 1);
    this.state.completed.splice(i, 1);
    this.setState({
      list: this.state.list,
      completed: this.state.completed,
    });
  }
  completeTodoByIndex(i) {
    this.state.completed[i] = !this.state.completed[i];
    this.setState({
      completed: this.state.completed,
    });
  }
  addNewTodo() {
    if (this.state.input.trim() === '') return;
    this.state.list.push(this.state.input.trim());
    this.state.completed.push(false);
    this.setState({
      list: this.state.list,
      completed: this.state.completed,
      input: '',
    });
  }
  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" onChange={this.handleInputChange} value={this.state.input} onKeyPress={this.handleKeyPress} />
          </header>
          <section className="main">
            <input className="toggle-all" type="checkbox" onClick={this.toggleAll} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <TodoItem list={this.state.list} completed={this.state.completed} del={this.deleteTodoByIndex} com={this.completeTodoByIndex} />
          </section>
          <footer className="footer">
            <CountDisplay completed={this.state.completed} />
            <button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
          </footer>
        </section>
        <footer className="info">
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    );
  }
}

class TodoItem extends Component {
  render() {
    const list = this.props.list.map((s, index) => <Todo title={s} completed={this.props.completed[index]} del={this.props.del} com={this.props.com} index={index} />);
    return (
      <ul className="todo-list">
        {list}
      </ul>
    );
  }
}

class Todo extends Component {
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

class CountDisplay extends Component {
  render() {
    return (
      <span className="todo-count">{this.props.completed.filter(x => !x).length} items left</span>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
