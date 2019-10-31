import React from 'react';
import {Link} from 'react-router-dom';

function ListItem({shopping, handleDeleteShopping}) {
    return (
        <div className='panel panel-default'>
          
          
            <dl>
              <dd>{shopping.item} 
              {shopping.category}
            
          
            <button
              className='btn btn-xs btn-danger delitem'
              onClick={() => handleDeleteShopping(shopping._id)}
            >
              Delete
            </button>
            </dd>
            </dl>
            
        </div>
      );
}

export default ListItem;