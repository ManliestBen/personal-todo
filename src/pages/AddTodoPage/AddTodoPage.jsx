import React, {Component} from 'react';

class AddTodoPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: '',
      priority: 'Medium',
      comments: ''
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.formData);
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
        <h1>Add To-Do</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>To-Do: (required)</label>
            <input
              className="form-control"
              name="title"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Priority: (Low/Medium/High)</label>
            <select
              
              className="form-control"
              name="priority"
              value={this.state.formData.priority}
              onChange={this.handleChange}
              required
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
          </div>
          <div className="form-group">
            <label>Comments:</label>
            <textarea
              className="form-control"
              name="comments"
              value={this.state.formData.comments}
              onChange={this.handleChange}
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            Add To-Do
          </button>
        </form>
      </>
    );
  }
}

export default AddTodoPage;