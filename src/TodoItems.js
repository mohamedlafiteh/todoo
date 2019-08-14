import React, { Component } from "react";

export class TodoItems extends Component {
  getStyle = () => {
    return {
      backgroundColor: "gray",
      padding: "30px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todos.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todos;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        <p>{title}</p>
        <button
          onClick={this.props.handeDelete.bind(this, id)}
          style={buttonStyle}
        >
          x
        </button>
      </div>
    );
  }
}

export default TodoItems;

const buttonStyle = {
  background: "red",
  color: "blue",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
