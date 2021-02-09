import React, { Component } from "react";
import "./App.css";

export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      { name: "Hit the gym", category: "todo", bgcolor: "#FFB695" },
      { name: "Get breakfast", category: "todo", bgcolor: "#96D1CD" }
    ]
  };

  render() {
    var tasks = {
      todo: [],
      done: []
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          className="draggable"
          draggable
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div className="todo">
          <span className="task-header">To-Do List</span>
          {tasks.todo}
        </div>
        <div className="droppable" onDragOver={(ev) => this.onDragOver(ev)}>
          ><span className="task-header">Tasks Done</span>
          {tasks.done}
        </div>
      </div>
    );
  }
}
