import React, { Component } from "react";
import ToDoList from "./Components/ToDoList/ToDoList";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
