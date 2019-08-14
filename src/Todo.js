import React, { Component } from "react";
import TodoItems from "./TodoItems";
export class Todo extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(item => {
          return (
            <TodoItems
              key={item.id}
              markComplete={this.props.markComplete}
              todos={item}
              handeDelete={this.props.handeDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Todo;
