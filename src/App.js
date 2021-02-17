import React, { Component } from "react";
import "./App.css";

export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      { name: "Hit the gym", category: "todo", bgcolor: "#FFB695" },
      { name: "Get breakfast", category: "todo", bgcolor: "#96D1CD" }
    ]
  };
  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };
  onDragOver = (ev) => {
    ev.preventDefault();
  };
  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  };
  render() {
    var tasks = {
      todo: [],
      inwork: [],
      done: []
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          className="draggable"
          draggable
          onDragStart={(e) => this.onDragStart(e, t.name)}
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div
          className="todo"
          onDragOver={(ev) => this.onDragOver(ev)}
          onDrop={(e) => this.onDrop(e, "todo")}
        >
          <span className="task-header">To-Do List</span>
          {tasks.todo}
        </div>
        <div
          className="todo1"
          onDragOver={(ev) => this.onDragOver(ev)}
          onDrop={(e) => this.onDrop(e, "inwork")}
        >
          <span className="task-header">In-Work</span>
          {tasks.inwork}
        </div>

        <div
          className="droppable"
          onDragOver={(ev) => this.onDragOver(ev)}
          onDrop={(e) => this.onDrop(e, "done")}
        >
          <span className="task-header">Tasks Done</span>
          {tasks.done}
        </div>
      </div>
    );
  }
}
