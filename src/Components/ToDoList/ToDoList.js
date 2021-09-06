import React, { Component } from "react";
import ToDoItems from "../ToDoItems/ToDoItems";

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: "",
      items: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    let state = this.state;
    if (this._tarefaInput.value !== "") {
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now(),
      };
      this.setState({ items: [...state.items, newItem] });
    }
    e.preventDefault();
    this.setState({ tarefa: "" });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Nova Tarefa"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(e) => this.setState({ tarefa: e.target.value })}
            ref={(e) => (this._tarefaInput = e)}
          />
          <button type="submit">Adicionar</button>
        </form>
        <ToDoItems lista={this.state.items} />
      </React.Fragment>
    );
  }
}

export default ToDoList;
