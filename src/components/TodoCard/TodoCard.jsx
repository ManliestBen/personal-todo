import React from 'react';
import {Link} from 'react-router-dom';

function TodoCard({todo, handleDeleteTodo}) {
    return (
        <div className='panel panel-default'>
          <div className="panel-heading">
            <h3 className='panel-title'>{todo.title}</h3>
          </div>
          <div className='panel-body'>
            <dl>
              <dt>Priority</dt>
              <dd>{todo.priority}</dd>
              <dt>Comments</dt>
              <dd>{todo.comments}</dd>
            </dl>
          </div>
          <div className='panel-footer'>
            <Link
              className='btn btn-xs btn-warning'
              to={{
                pathname: '/edit',
                state: {todo}
              }}
            >
              Edit
            </Link>
            <button
              className='btn btn-xs btn-danger margin-left-10'
              onClick={() => handleDeleteTodo(todo._id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
}

export default TodoCard;