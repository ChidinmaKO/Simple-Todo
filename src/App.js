import React, { Component } from 'react';
import Todos from './Todos';
import Addtodo from './Addtodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Learn Linear Algebra'},
      {id: 2, content: 'Start React side project'},
      {id: 3, content: 'Write blog post about project'},
      {id: 4, content: 'Be awesome'}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]

    this.setState( {
      todos: todos
    } )
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState( {
      todos: todos
    } )
  }


  render() {
    return (
      <div className="todo-app container">
        <h2 className="center teal-text">Sample Todo App</h2>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
        <Addtodo  addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
