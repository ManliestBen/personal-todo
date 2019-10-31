import React, {Component} from 'react';
import './ShoppingListPage.css';
import ListItem from '../../components/ListItem/ListItem';

class ShoppingListPage extends Component {
    state = {
        formData: {
            item: '',
            category: ''
        }
    }

    formRef = React.createRef();
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddShopping(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
          formData,
          invalidForm: !this.formRef.current.checkValidity()
        });
      };


    render() {
    return (
      <>
        <h1>Shopping List:</h1>
        <div>
          {this.props.shopping.map(shopping =>
            <ListItem
              key={shopping._id}
              shopping={shopping}
              handleDeleteShopping={this.props.handleDeleteShopping}
            />
          )}
          <p>Add Item:</p>
          <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                <input
                className="form-control"
                name="item"
                value={this.state.formData.item}
                onChange={this.handleChange}
                required
                />
                <select
                className="form-control"
                name="category"
                value={this.state.formData.category}
                onChange={this.handleChange}
                placeholder="taco"
                
                >
                    <option value="" selected>Choose Category</option>
                    <option>Deli</option>
                    <option>Bakery</option>
                    <option>Produce</option>
                    <option>Seafood</option>
                    <option>Dry/Canned</option>
                    <option>Meats</option>
                    <option>Frozen</option>
                    <option>Beverage</option>
                    <option>Dairy</option>
                    <option>Paper Goods</option>
                    <option>Cleaning</option>
                    <option>Hygiene</option>
                </select>
                <button
                    type="submit"
                    className="btn"
                    disabled={this.state.invalidForm}
                >Add Item</button>

          </form>
        </div>
      </>
    );
  }
}

export default ShoppingListPage