import React from 'react';
import './TodoListPage.css';
import TodoCard from '../../components/TodoCard/TodoCard';

function TodoListPage(props) {
  return (
    <>
      <h1>To-Do List:</h1>
      <div className='TodoListPage-grid'>
        {props.todos.map(todo =>
          <TodoCard
            key={todo._id}
            todo={todo}
            handleDeleteTodo={props.handleDeleteTodo}
          />
        )}
      </div>
    </>
  );
}

export default TodoListPage;