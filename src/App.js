import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import * as todoAPI from './services/todos-api';
import TodoListPage from './pages/TodoListPage/TodoListPage';
import AddTodoPage from './pages/AddTodoPage/AddTodoPage';
import EditTodoPage from './pages/EditTodoPage/EditTodoPage';


class App extends Component {
  state = {
    todos: []
  };

  handleAddTodo = async newTodoData => {
    const newTodo = await todoAPI.create(newTodoData);
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }), () => this.props.history.push('/'));
  }

  handleUpdateTodo = async updatedTodoData => {
    const updatedTodo = await todoAPI.update(updatedTodoData);
    const newTodosArray = this.state.todos.map(t =>
      t._id === updatedTodo._id ? updatedTodo : t
    );
    this.setState(
      {todos: newTodosArray},
      () => this.props.history.push('/')
    );
  }

  handleDeleteTodo = async id => {
    await todoAPI.deleteOne(id);
    this.setState(state => ({
      todos: state.todos.filter(t => t._id !== id)
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const todos = await todoAPI.getAll();
    this.setState({todos});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Personal To-Do List
          <nav>
            <NavLink exact to='/'>To-Do List</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/add'>Add To-Do</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/' render={({history}) => 
            <TodoListPage
              todos={this.state.todos}
              handleDeleteTodo={this.handleDeleteTodo}
            />
          } />
          <Route exact path='/add' render={() => 
            <AddTodoPage
              handleAddTodo = {this.handleAddTodo}
            />
          } />
          <Route exact path='/edit' render={({history, location}) => 
            <EditTodoPage
              handleUpdateTodo={this.handleUpdateTodo}
              location={location}
            />
          } />
        </main>
      </div>
    );
  }

}



export default App;
