import React from "react";
import "./App.css";
import Todo from "./Todo";
import Header from "./Header";
import AddTodo from "./AddTodo";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "play football",
          completed: false
        },
        {
          id: 2,
          title: "visit dad",
          completed: false
        },
        {
          id: 3,
          title: "go to work",
          completed: false
        }
      ]
    };
  }
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  };
  handeDelete = id => {
    this.setState({
      todos: [...this.state.todos.filter(item => item.id !== id)]
    });
  };
  AddTodo = newTodo => {
    const newItems = {
      id: 4,
      title: newTodo,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newItems]
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo AddTodo={this.AddTodo} />
        <Todo
          handeDelete={this.handeDelete}
          markComplete={this.markComplete}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
