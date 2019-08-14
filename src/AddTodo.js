import React, { Component } from "react";

export class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="Add Todo"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
