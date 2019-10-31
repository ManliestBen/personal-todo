import React from 'react';
import {Link} from 'react-router-dom';

function ListItem({shopping, handleDeleteShopping}) {
    return (
        <div className='panel panel-default'>
          
          <div className='panel-body'>
            <dl>
              <dd>{shopping.item}</dd>
              <dd>{shopping.category}</dd>
            </dl>
          </div>
            <button
              className='btn btn-xs btn-danger margin-left-10'
              onClick={() => handleDeleteShopping(shopping._id)}
            >
              Delete
            </button>
          
        </div>
      );
}

export default ListItem;