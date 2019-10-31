import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import * as todoAPI from './services/todos-api';
import * as shoppingAPI from './services/shopping-api';
import TodoListPage from './pages/TodoListPage/TodoListPage';
import AddTodoPage from './pages/AddTodoPage/AddTodoPage';
import EditTodoPage from './pages/EditTodoPage/EditTodoPage';
import ShoppingListPage from './pages/ShoppingListPage/ShoppingListPage';


class App extends Component {
  state = {
    todos: [],
    shopping: []
  };

  handleAddTodo = async newTodoData => {
    const newTodo = await todoAPI.create(newTodoData);
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }), () => this.props.history.push('/'));
  }
  
  handleAddShopping = async newShoppingData => {
    const newShopping = await shoppingAPI.create(newShoppingData);
    this.setState(state => ({
      shopping: [...state.shopping, newShopping]
    }), () => this.props.history.push('/shop'));
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

  handleUpdateShopping = async updatedShoppingData => {
    const updatedShopping = await shoppingAPI.update(updatedShoppingData);
    const newShoppingArray = this.state.shopping.map(s=>
      s._id === updatedShopping._id ? updatedShopping : s
    );
    this.setState(
      {shopping: newShoppingArray},
      () => this.props.history.push('/shop')
    );
  }

  handleDeleteTodo = async id => {
    await todoAPI.deleteOne(id);
    this.setState(state => ({
      todos: state.todos.filter(t => t._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleDeleteShopping = async id => {
    await shoppingAPI.deleteOne(id);
    this.setState(state => ({
      shopping: state.shopping.filter(s => s._id !== id)
    }), () => this.props.history.push('/shop'));
  }

  async componentDidMount() {
    const todosFromAPI = await todoAPI.getAll();
    this.setState({todos: todosFromAPI});
    const shoppingFromAPI = await shoppingAPI.getAll();
    this.setState({shopping: shoppingFromAPI});
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
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/shop'>Shopping List</NavLink>
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
          <Route exact path='/shop' render={({history}) => 
            <ShoppingListPage
              shopping={this.state.shopping}
              handleDeleteShopping={this.handleDeleteShopping}
              handleAddShopping={this.handleAddShopping}
            />
          } />
        </main>
      </div>
    );
  }

}



export default App;
