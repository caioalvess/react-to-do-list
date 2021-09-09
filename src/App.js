import React, { Component } from "react";
import Footer from "./Components/Footer/Footer";
import ToDoList from "./Components/ToDoList/ToDoList";
import "./style.css";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ color: "#005eff" }}>Lista de Tarefas</h1>
        <ToDoList />
        <Footer />
      </div>
    );
  }
}

export default App;
